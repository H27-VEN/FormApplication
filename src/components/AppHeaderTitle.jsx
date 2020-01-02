import React from "react";
import Typography from "@material-ui/core/Typography";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";

const AppHeaderTitle = () => {
  return (
    <>
      <PermContactCalendarIcon classes={{ root: "contact-header-icon" }} />
      <div className="app-title">
        <Typography variant="h4">Contacts</Typography>
        <Typography variant="subtitle1">
          Welcome to FlatCRM Contact Page
        </Typography>
      </div>
    </>
  );
};

export default React.memo(AppHeaderTitle);
