import React, { useState, useEffect } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import FormGroup from "@material-ui/core/FormGroup";
import Button from "@material-ui/core/Button";
import uuid from "uuid/v1";
import validator from "../validator";

const AddEditContactDetails = props => {
  const [contactDetails, setContactDetails] = useState({
    formTitle: "Add Contact",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    designation: "",
    address: "",
    valErrors: {
      firstName: null,
      lastName: null,
      email: null,
      phone: null,
      address: null
    },
    saveButtonDisabled: true
  });

  const resetForm = () => {
    setContactDetails({
      formTitle: "Add Contact",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      designation: "",
      address: "",
      valErrors: {
        firstName: null,
        lastName: null,
        email: null,
        phone: null,
        address: null
      },
      saveButtonDisabled: true
    });
  };

  useEffect(() => {
    console.log("in useEffect");
    console.log(props.contactDetails);
    resetForm();
    if (props.contactDetails) {
      console.log("... inside If ...");
      const {
        id,
        name,
        email,
        phone,
        designation,
        company,
        address
      } = props.contactDetails;
      const firstName = name.split(" ")[0];
      const lastName = name.split(" ")[1];
      setContactDetails({
        formTitle: "Edit Contact",
        id,
        firstName,
        lastName,
        email,
        phone,
        company,
        designation,
        address,
        valErrors: {
          firstName: false,
          lastName: false,
          email: false,
          phone: false,
          address: false
        },
        saveButtonDisabled: false
      });
    }
  }, [props]);

  const handleValidation = (name, value) => {
    //const { name, value } = event.target;
    let isError = false;
    switch (name) {
      case "firstName":
      case "lastName":
      case "address":
        isError = validator("text", value);
        break;
      case "email":
        isError = validator("email", value);
        break;
      case "phone":
        isError = validator("phone", value);
        break;
      default:
    }
    return isError;
  };

  const handleSaveContactDetails = () => {
    const {
      firstName,
      lastName,
      email,
      phone,
      company,
      address,
      designation,
      id
    } = contactDetails;

    const newContactDetails = {
      id: id ? id : uuid(),
      name: `${firstName} ${lastName}`,
      email,
      phone,
      designation,
      company: company ? company : "",
      address
    };
    console.log("::newContactDetails:: ", newContactDetails);
    resetForm();
    props.saveContactDetails(newContactDetails);
    // resetForm();
  };

  const handleContactInput = event => {
    const { name, value } = event.target;
    const updatedValErrors = {
      ...contactDetails.valErrors,
      [name]: handleValidation(name, value)
    };
    setContactDetails({
      ...contactDetails,
      [name]: value,
      valErrors: updatedValErrors,
      saveButtonDisabled: !Object.values(updatedValErrors).every(
        val => val === false
      )
    });
  };

  return (
    <Dialog
      open={props.isOpen}
      onClose={props.closeModal}
      aria-labelledby="form-dialog-title"
      fullWidth
    >
      {/* {console.log(":: contactDetails in render ::", contactDetails)} */}
      <DialogTitle id="form-dialog-title">
        {contactDetails.formTitle}
      </DialogTitle>
      <DialogContent>
        <FormGroup>
          <TextField
            autoFocus
            margin="dense"
            name="firstName"
            label="First Name"
            type="text"
            value={contactDetails.firstName}
            inputProps={{ maxLength: 20 }}
            onChange={handleContactInput}
            error={contactDetails.valErrors["firstName"]}
            helperText={
              contactDetails.valErrors["firstName"]
                ? "This field cannot be blank"
                : ""
            }
            required
            fullWidth
          />
        </FormGroup>
        <FormGroup>
          <TextField
            margin="dense"
            name="lastName"
            label="Last Name"
            type="text"
            value={contactDetails.lastName}
            inputProps={{ maxLength: 20 }}
            onChange={handleContactInput}
            error={contactDetails.valErrors["lastName"]}
            helperText={
              contactDetails.valErrors["lastName"]
                ? "This field cannot be blank"
                : ""
            }
            required
          />
        </FormGroup>
        <FormGroup>
          <TextField
            margin="dense"
            name="email"
            label="Email Address"
            type="email"
            value={contactDetails.email}
            inputProps={{ maxLength: 255 }}
            onChange={handleContactInput}
            error={contactDetails.valErrors["email"]}
            helperText={
              contactDetails.valErrors["email"]
                ? "please enter valid email address"
                : ""
            }
            required
          />
        </FormGroup>
        <FormGroup>
          <TextField
            margin="dense"
            name="phone"
            label="Phone Number"
            type="phone"
            value={contactDetails.phone}
            onChange={handleContactInput}
            error={contactDetails.valErrors["phone"]}
            helperText={
              contactDetails.valErrors["phone"]
                ? "please enter a valid phone number"
                : ""
            }
            required
          />
        </FormGroup>

        <FormGroup>
          <TextField
            margin="dense"
            name="company"
            label="Company"
            type="text"
            value={contactDetails.company}
            inputProps={{ maxLength: 20 }}
            onChange={handleContactInput}
          />
        </FormGroup>

        <FormGroup>
          <TextField
            margin="dense"
            name="designation"
            label="Designation"
            type="text"
            value={contactDetails.designation}
            inputProps={{ maxLength: 20 }}
            onChange={handleContactInput}
          />
        </FormGroup>

        <FormGroup>
          <TextField
            margin="dense"
            name="address"
            label="Address"
            type="text"
            value={contactDetails.address}
            inputProps={{ maxLength: 20 }}
            onChange={handleContactInput}
            error={contactDetails.valErrors["address"]}
            helperText={
              contactDetails.valErrors["address"]
                ? "please enter a valid address"
                : ""
            }
            required
          />
        </FormGroup>
      </DialogContent>
      <DialogActions>
        <Button
          disabled={contactDetails.saveButtonDisabled}
          onClick={handleSaveContactDetails}
          color="primary"
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddEditContactDetails;
