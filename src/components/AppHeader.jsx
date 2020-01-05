import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import PieChartOutlinedIcon from "@material-ui/icons/PieChartOutlined";
import EventOutlinedIcon from "@material-ui/icons/EventOutlined";

const AppHeader = () => {
  const [drawerResponsiveOpen, setDrawerResponsiveOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerResponsiveOpen(!drawerResponsiveOpen);
  };

  return (
    <>
      <AppBar position="fixed">
        <ToolBar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </ToolBar>
      </AppBar>
      <Hidden mdUp>
        <Drawer
          variant="temporary"
          open={drawerResponsiveOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          classes={{ paper: "fix-drawer" }}
        >
          <List>
            {[
              HomeOutlinedIcon,
              PersonOutlineOutlinedIcon,
              DescriptionOutlinedIcon,
              PieChartOutlinedIcon,
              EventOutlinedIcon
            ].map((Icon, index) => {
              return (
                <ListItem key={index} button>
                  <Icon />
                </ListItem>
              );
            })}
          </List>
        </Drawer>
      </Hidden>
      <Hidden smDown>
        <Drawer
          open={drawerResponsiveOpen}
          variant="permanent"
          classes={{ paper: "fix-drawer" }}
        >
          <List>
            {[
              HomeOutlinedIcon,
              PersonOutlineOutlinedIcon,
              DescriptionOutlinedIcon,
              PieChartOutlinedIcon,
              EventOutlinedIcon
            ].map((Icon, index) => {
              return (
                <ListItem key={index} button>
                  <Icon />
                </ListItem>
              );
            })}
          </List>
        </Drawer>
      </Hidden>
    </>
  );
};

export default React.memo(AppHeader);
