import { createContext, useCallback, useEffect, useState } from "react";
import { getRequest, postRequest } from "../utils/services";
import { io } from "socket.io-client";

export const ChatContext = createContext();

export const ChatContextProvider = ({ children, user }) => {
  const [chats, setChats] = useState(null);
  const [isChatsLoading, setIsChatsLoading] = useState(false);
  const [chatsError, setChatsError] = useState(null);
  const [selectedChat, setSelectedChat] = useState(null);
  const [messages, setMessages] = useState(null);
  const [isMessagesLoading, setIsMessagesLoading] = useState(false);
  const [messagesError, setMessagesError] = useState(null);
  const [newMessage, setNewMessage] = useState(null);
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const userId = JSON.parse(localStorage.getItem("user"))?.userData?.id;
  //console.log("id", userId);

  useEffect(() => {
    const socket = io("http://localhost:8000");
    setSocket(socket);
    return () => {
      socket.disconnect();
    };
  }, [user]);

  useEffect(() => {
    if (!socket) return;
    socket.emit("addNewUser", {
      userId: userId,
    });
    socket.on("getOnlineUsers", (res) => setOnlineUsers(res));
    return () => socket.off("getOnlineUsers");
  }, [socket]);

  useEffect(() => {
    if (!socket) return;

    const recipientId = selectedChat?.members.find((id) => id != userId);
    socket.emit("sendMessage", { ...newMessage, recipientId });
  }, [newMessage]);

  useEffect(() => {
    if (!socket) return;
    socket.on("getMessage", (message) => {
      if (selectedChat?._id !== message.chatId) return;
      setMessages((prev) => [...prev, message]);
    });
    return () => socket.off("getMessage");
  }, [socket, selectedChat]);

  useEffect(() => {
    const getUserChats = async () => {
      if (userId) {
        setIsChatsLoading(true);
        setChatsError(null);
        const res = await getRequest(`api/v1/chats/${userId}`);
        setIsChatsLoading(false);
        if (res.error) setChatsError(res.error);
        const sortedChats = res?.chats?.sort(
          (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
        );
        setChats(sortedChats);
        if (sortedChats && sortedChats[0]) {
          setSelectedChat(sortedChats[0]);
        }
        console.log("chats", sortedChats);
      }
    };
    getUserChats();
  }, [user]);

  useEffect(() => {
    const getChatMessages = async () => {
      if (user) {
        setIsMessagesLoading(true);
        setMessagesError(null);
        const res = await getRequest(`api/v1/messages/${selectedChat?._id}`);
        setIsMessagesLoading(false);
        if (res.error) setMessagesError(res.error);
        setMessages(res.messages);
        console.log("messages", res.messages);
      }
    };
    getChatMessages();
  }, [selectedChat]);

  useEffect(() => {
    setChats((prevChats) => {
      const updatedChats = prevChats?.map((chat) => {
        if (chat._id === selectedChat._id) {
          return { ...chat, updatedAt: new Date().toISOString() }; // Update the selected chat's updatedAt property
        }
        return chat;
      });
      return updatedChats?.sort(
        (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
      ); // Sort the updated chats
    });
  }, [newMessage]);

  const createChat = useCallback(async (employerId, employeeId) => {
    const res = await postRequest(
      `api/v1/chats`,
      JSON.stringify({ employerId, employeeId })
    );
    if (res.error) setChatsError(res.error);
    setChats((prev) => [...prev, res.chat]);
    setSelectedChat(res.chat);
    console.log("created private chat: ", res);
  }, []);

  const sendNewMessage = useCallback(async (text, sender, currentChatId) => {
    if (text) {
      const res = await postRequest(
        `api/v1/messages`,
        JSON.stringify({
          chatId: currentChatId,
          senderId: sender.userData.id,
          text,
        })
      );
      if (res.error) setChatsError(res.error);
      setNewMessage(res.message);
      setMessages((prev) => [...prev, res.message]);
    }
  }, []);

  return (
    <ChatContext.Provider
      value={{
        chats,
        isChatsLoading,
        chatsError,
        selectedChat,
        setSelectedChat,
        createChat,
        messages,
        sendNewMessage,
        onlineUsers,
        newMessage,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
