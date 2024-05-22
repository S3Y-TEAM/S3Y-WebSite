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

  useEffect(() => {
    const socket = io("https://s3y.onrender.com");
    setSocket(socket);
    return () => {
      socket.disconnect();
    };
  }, [user]);

  useEffect(() => {
    if (!socket) return;
    socket.emit("addNewUser", {
      userId: user?.userData?.id,
    });
    socket.on("getOnlineUsers", (res) => setOnlineUsers(res));
    return () => socket.off("getOnlineUsers");
  }, [socket]);

  useEffect(() => {
    if (!socket) return;

    const recipientId = selectedChat?.members.find(
      (id) => id != user?.userData?.id
    );
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
      console.log(user?.userData?.id);
      if (user?.userData?.id) {
        console.log("user is here");
        setIsChatsLoading(true);
        setChatsError(null);
        const res = await getRequest(
          `https://s3y.onrender.com/api/v1/chats/${user?.userData.id}`
        );

        console.log("data", res);
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
        console.log("selected chats", selectedChat);
      }
    };
    getUserChats();
  }, [user]);

  useEffect(() => {
    const getChatMessages = async () => {
      if (user) {
        setIsMessagesLoading(true);
        setMessagesError(null);
        const res = await getRequest(
          `https://s3y.onrender.com/api/v1/messages/${selectedChat?._id}`
        );
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

  const createChat = useCallback(async (firstId, secondId) => {
    const res = await postRequest(
      `/api/chats`,
      JSON.stringify({ firstId, secondId })
    );
    if (res.error) setChatsError(res.error);
    setChats((prev) => [...prev, res]);
    setSelectedChat(res);
    console.log("created private chat: ", res);
  }, []);

  const sendNewMessage = useCallback(async (text, sender, currentChatId) => {
    if (text) {
      const res = await postRequest(
        `https://s3y.onrender.com/api/v1/messages`,
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
