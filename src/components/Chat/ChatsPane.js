import * as React from "react";
import Stack from "@mui/joy/Stack";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import { Box, Button, Chip, IconButton, ToggleButtonGroup } from "@mui/joy";
import List from "@mui/joy/List";
import EditNoteRoundedIcon from "@mui/icons-material/EditNoteRounded";
import ChatListItem from "./ChatListItem";
//import GroupChatListItem from "./GroupChatListItem";
import { ChatContext } from "../../context/chatContext";

export default function ChatsPane(props) {
  const { chats, selectedChatId, setSelectedChat } = props;
  //const { chatType, setChatType } = React.useContext(ChatContext);

  return (
    <Sheet
      className="try"
      sx={{
        borderRight: "1px solid",
        borderColor: "divider",
        height: "calc(100dvh - 100px)",
        overflowY: "auto",
      }}
    >
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        justifyContent="space-between"
        p={2}
        pb={1.5}
      >
        <Typography
          fontSize={{ xs: "md", md: "lg" }}
          component="h1"
          fontWeight="lg"
          endDecorator={
            <Chip
              variant="soft"
              size="md"
              slotProps={{ root: { component: "span" } }}
              sx={{ backgroundColor: "#CFE3E9" }}
            >
              4
            </Chip>
          }
          sx={{ mr: "auto" }}
        >
          Messages
        </Typography>
        <IconButton
          variant="plain"
          aria-label="edit"
          color="neutral"
          size="sm"
          sx={{ display: { xs: "none", sm: "unset" } }}
        >
          <EditNoteRoundedIcon />
        </IconButton>
      </Stack>
      <List
        sx={{
          py: 0,
          "--ListItem-paddingY": "0.75rem",
          "--ListItem-paddingX": "1rem",
        }}
      >
        {chats?.length > 0 &&
          chats?.map((chat) => (
            <ChatListItem
              key={chat.id}
              chat={chat}
              setSelectedChat={setSelectedChat}
              selectedChatId={selectedChatId}
            />
          ))}
      </List>
    </Sheet>
  );
}
