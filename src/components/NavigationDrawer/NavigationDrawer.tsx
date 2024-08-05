import { CSSObject } from "@mui/system";
import './NavigationDrawer.css';
import React, { useState } from "react";
import {
  Box,
  CssBaseline, Divider, Grid,
  List,
  ListItem,
  ListItemButton, ListItemIcon,
  ListItemText,
  styled,
  Theme,
  Typography,
} from "@mui/material";
import MuiDrawer from '@mui/material/Drawer';
import bleeterLogo from '../../assets/Bleeter_light.svg';
import {
  Bookmarks,
  Explore,
  HomeRounded,
  ListAlt,
  Message, NotAccessible,
  Notifications, People, Person, Settings,
} from "@mui/icons-material";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const NavigationDrawer = (): JSX.Element => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const getIconComponent = (text: string) => {
    switch (text) {
      case 'Home':
        return <HomeRounded />;
      case 'Explore':
        return <Explore />;
      case 'Notifications':
        return <Notifications />;
      case 'Messages':
        return <Message />;
      case 'Lists':
        return <ListAlt />;
      case 'Bookmarks':
        return <Bookmarks />;
      case 'Communities':
        return <People />;
      case 'Profile':
        return <Person />;
      case 'SettingsAndPrivacy':
        return <Settings />;
      default:
        return <NotAccessible />;
    }
  };

  interface ListItemLinkProps {
    icon?: React.ReactElement;
    primary: string;
    to: string;
  }

  const Link = React.forwardRef<HTMLAnchorElement, RouterLinkProps>(
    function Link(itemProps, ref) {
      return <RouterLink ref={ref} {...itemProps} role={undefined} />;
    },
  );

  function ListItemLink(props: ListItemLinkProps) {
    const { icon, primary, to } = props;

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
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer variant="permanent" open={open}>
        <List>
          <ListItem
            key='bleeter-logo'
            disablePadding sx={{
              display: 'list-item',
              paddingBottom: '4em',
              paddingTop: '2em',
            }}
            onClick={(open) ? handleDrawerClose: handleDrawerOpen}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <img src={bleeterLogo} className="logo" alt="Bleeter logo"/>
              </ListItemIcon>
              <ListItemText primary='bleeter' sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
          {['Home', 'Explore', 'Notifications', 'Messages', 'Lists', 'Bookmarks', 'Communities'].map((text) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemLink primary={text} to={`/${text.toLowerCase()}`} icon={getIconComponent(text)} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Profile', 'SettingsAndPrivacy'].map((text) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {getIconComponent(text)}
                </ListItemIcon>
                <ListItemText primary={text.replace(/([a-z0-9])([A-Z])/g, '$1 $2')} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Grid sx={{ height: '100%' }} onClick={(open) ? handleDrawerClose: handleDrawerOpen} />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
          sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
          tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
          gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
          et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
          tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Box>
    </Box>
  );
};

export default NavigationDrawer;
