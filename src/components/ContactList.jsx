import React, { useState, useEffect } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const ContactList = props => {
  const [contactListInput, setContactListInput] = useState({
    list: props.list,
    selectedContact: props.list[0].id
  });

  useEffect(() => {
    setContactListInput(currentState => {
      const updatedState = { ...currentState, list: props.list };
      return updatedState;
    });
  }, [props]);

  const handleContactSelect = event => {
    setContactListInput({
      ...contactListInput,
      selectedContact: event.currentTarget.id
    });
    props.selectedContactDetails(event.currentTarget.id);
  };

  // yet to be implemented will use for delete
  const selectAllContacts = event => {};

  return (
    <>
      <div className="contact-list">
        <TableContainer>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  {/* will use it to delete the contacts */}
                  <Checkbox
                    // indeterminate={numSelected > 0 && numSelected < rowCount}
                    checked={false}
                    onChange={selectAllContacts}
                    // inputProps={{ "aria-label": "select all desserts" }}
                  />
                </TableCell>
                <TableCell>Basic Info</TableCell>
                <TableCell>Company</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {contactListInput.list.map((contact, index) => (
                <TableRow
                  hover
                  role="checkbox"
                  key={contact.id}
                  id={contact.id}
                  selected={contact.id === contactListInput.selectedContact}
                  onClick={handleContactSelect}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      // indeterminate={numSelected > 0 && numSelected < rowCount}
                      checked={false}
                      onChange={selectAllContacts}
                      // inputProps={{ "aria-label": "select all desserts" }}
                    />
                  </TableCell>
                  <TableCell>
                    <div className="user-name-info">
                      <Avatar component="span">{contact.name.charAt(0)}</Avatar>
                      <Typography classes={{ root: "user-name" }}>
                        {contact.name}
                      </Typography>
                      {/* <Typography>{contact.email}</Typography> */}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Typography>{contact.company}</Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default ContactList;
