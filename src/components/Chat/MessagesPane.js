import * as React from "react";
import Box from "@mui/joy/Box";
import Sheet from "@mui/joy/Sheet";
import Stack from "@mui/joy/Stack";
import MessagesPaneHeader from "./MessagesPaneHeader";
import { ChatContext } from "../../context/chatContext";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useFetchRecipient } from "../../hooks/useFetchRecipient";
import MessageInput from "./MessagesInput";
import MessagesList from "./MessagesList";

export default function MessagesPane(props) {
  const { selectedChat } = React.useContext(ChatContext);
  const { user } = useAuthContext();
  let { recipient, recipientId } = useFetchRecipient(selectedChat, user);
  const { messages, sendNewMessage, onlineUsers } =
    React.useContext(ChatContext);
  const [textAreaValue, setTextAreaValue] = React.useState("");
  const online = onlineUsers?.some((user) => user.userId == recipientId);

  if (!recipient)
    return (
      <div style={{ textAlign: "center", width: "100%" }}>
        Select a conversation
      </div>
    );

  return (
    <Sheet
      sx={{
        width: "800px",
        height: {
          xs: "calc(100dvh - var(--Header-height))",
          lg: "calc(100dvh - 100px)",
        },
        display: "flex",
        flexDirection: "column",
        marginLeft: "20px",
        backgroundColor: "#f0f4f8",
        borderRadius: "20px",
        boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
      }}
    >
      <MessagesPaneHeader
        username={recipient?.user_name}
        src={null}
        online={online}
      />
      <Box
        sx={{
          display: "flex",
          flex: 1,
          minHeight: 0,
          px: 2,
          py: 3,
          overflowY: "scroll",
          flexDirection: "column-reverse",
        }}
      >
        <Stack
          spacing={2}
          justifyContent="flex-end"
          sx={{
            borderStartEndRadius: "20px",
          }}
        >
          {messages?.map((message, index) => (
            <MessagesList
              key={index}
              message={message}
              index={index}
              recipient={recipient}
              online={online}
            />
          ))}
        </Stack>
      </Box>
      <MessageInput
        textAreaValue={textAreaValue}
        setTextAreaValue={setTextAreaValue}
        onSubmit={() => sendNewMessage(textAreaValue, user, selectedChat._id)}
      />
    </Sheet>
  );
}
