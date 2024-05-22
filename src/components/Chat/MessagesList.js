import React from "react";
import Stack from "@mui/joy/Stack";
import AvatarWithStatus from "./AvatarWithStatus";
import ChatBubble from "./ChatBubble";
import { useAuthContext } from "../../hooks/useAuthContext";

function MessagesList(props) {
  const { message, online, index, recipient } = props;
  const { user } = useAuthContext();
  const isYou = message?.senderId == user?.userData?.id;
  return (
    <Stack
      key={index}
      direction="row"
      spacing={2}
      flexDirection={isYou ? "row-reverse" : "row"}
    >
      {!isYou && (
        <AvatarWithStatus online={online} username={recipient?.user_name} />
      )}
      <ChatBubble
        variant={isYou ? "sent" : "received"}
        name={isYou ? user?.userData?.username : recipient?.user_name}
        {...message}
      />
    </Stack>
  );
}

export default MessagesList;
