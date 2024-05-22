import * as React from "react";
import Badge from "@mui/joy/Badge";
import Avatar from "@mui/joy/Avatar";

export default function AvatarWithStatus(props) {
  const { online, username, src } = props;
  return (
    <div>
      <Badge
        color={online ? "success" : "neutral"}
        variant={online ? "solid" : "soft"}
        size="sm"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        badgeInset="4px 4px"
      >
        {src ? (
          <Avatar size="sm" src={src} />
        ) : (
          <Avatar size="sm">{username && username[0].toUpperCase()}</Avatar>
        )}
      </Badge>
    </div>
  );
}
