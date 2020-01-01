import React from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import PieChartOutlinedIcon from "@material-ui/icons/PieChartOutlined";
import EventOutlinedIcon from "@material-ui/icons/EventOutlined";

const AppHeader = () => {
  return (
    <>
      <AppBar position="fixed">
        <ToolBar />
      </AppBar>
      <Drawer variant="permanent">
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
    </>
  );
};

export default React.memo(AppHeader);
