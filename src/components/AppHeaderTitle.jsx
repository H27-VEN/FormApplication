import React from "react";
import Typography from "@material-ui/core/Typography";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";

const AppHeaderTitle = () => {
  return (
    <>
      <Typography variant="h3">
        <PermContactCalendarIcon fontSize="large" />
        Contacts
      </Typography>
      <Typography variant="subtitle1">Welcome to FlatCRM</Typography>
    </>
  );
};

export default React.memo(AppHeaderTitle);
