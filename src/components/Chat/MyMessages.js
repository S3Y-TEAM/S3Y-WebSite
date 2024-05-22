import * as React from "react";
import Sheet from "@mui/joy/Sheet";
import { CssVarsProvider } from "@mui/joy/styles";
import ChatsPane from "./ChatsPane";
import { ChatContext } from "../../context/chatContext";
import MessagesPane from "./MessagesPane";

export default function MyMessages() {
  const { chats, isChatsLoading, selectedChat, setSelectedChat } =
    React.useContext(ChatContext);

  return (
    <CssVarsProvider>
      <Sheet
        sx={{
          flex: 1,
          width: "95%",

          mx: "40px",
          pt: { xs: "var(--Header-height)", sm: 0 },
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "minmax(min-content, min(30%, 400px)) 1fr",
          },
          backgroundColor: "#dddddd",
        }}
      >
        <Sheet
          className="try"
          sx={{
            position: { xs: "fixed", sm: "sticky" },
            transform: {
              xs: "translateX(calc(100% * (var(--MessagesPane-slideIn, 0) - 1)))",
              sm: "none",
            },
            transition: "transform 0.4s, width 0.4s",
            zIndex: 100,
            width: "350px",
            overflow: "hidden",
            // height: "calc(100dvh - 120px)",

            top: 52,
            borderRadius: "50px",
            boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
          }}
        >
          <ChatsPane
            chats={chats}
            isChatsLoading={isChatsLoading}
            selectedChatId={selectedChat?._id || selectedChat?.id}
            setSelectedChat={setSelectedChat}
          />
        </Sheet>
        <MessagesPane />
      </Sheet>
    </CssVarsProvider>
  );
}
