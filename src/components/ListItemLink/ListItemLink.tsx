import React from "react";
import { Link as RouterLink, LinkProps as RouterLinkProps } from "react-router-dom";
import { ListItemLinkProps } from "../../types/types";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

const Link = React.forwardRef<HTMLAnchorElement, RouterLinkProps>(
  function Link(itemProps, ref) {
    return <RouterLink ref={ref} {...itemProps} role={undefined} />;
  },
);

const ListItemLink = (props: ListItemLinkProps) => {
  const { icon, primary, to, open } = props;

  return (
    <ListItemButton
      component={Link}
      to={to}
      sx={{
        minHeight: 48,
        justifyContent: open ? 'initial' : 'center',
        px: 2.5,
      }}
    >
      {icon ? <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center' }}>{icon}</ListItemIcon> : null}
      <ListItemText primary={primary} sx={{ opacity: open ? 1 : 0 }} />
    </ListItemButton>
  );
};

export default ListItemLink;
