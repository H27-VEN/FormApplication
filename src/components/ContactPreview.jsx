import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import EditIcon from "@material-ui/icons/Edit";

const ContactPreview = props => {
  return (
    <Card>
      <CardContent>
        <div className="card-header-content">
          <Avatar
            classes={{ root: "content-name-avatar" }}
          >{`${props.data.name.split(" ")[0].charAt(0)}${props.data.name
            .split(" ")[1]
            .charAt(0)}`}</Avatar>

          <Typography>{props.data.name}</Typography>
          <Typography>{props.data.designation}</Typography>
        </div>
        <div className="contact-details">
          <div>
            {Object.keys(props.data)
              .filter(key => key !== "id")
              .map(key => {
                return (
                  <p key={key}>
                    <Typography
                      color="textSecondary"
                      variant="body1"
                      component="span"
                      classes={{ root: "contact-details-key" }}
                    >
                      {`${key.charAt(0).toUpperCase()}${key.substring(1)}`}{" "}
                    </Typography>
                    <Typography
                      variant="body2"
                      component="span"
                      classes={{ root: "contact-details-value" }}
                    >
                      {props.data[key] ? props.data[key] : "No Info Avaliable"}
                    </Typography>
                  </p>
                );
              })}
          </div>
        </div>
      </CardContent>
      <CardActions>
        <Button
          color="primary"
          variant="contained"
          id={props.data.id}
          onClick={props.openInEditMode}
          startIcon={<EditIcon />}
        >
          Edit Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default React.memo(ContactPreview);
