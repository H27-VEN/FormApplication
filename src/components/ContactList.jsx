import React, { useState, useEffect } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const ContactList = props => {
  console.log(":: props.list in contactList ::", props.list);
  const [contactListInput, setContactListInput] = useState({
    list: props.list,
    rows: props.list.length,
    rowsPerPage: 5,
    page: 0,
    selectedContact: props.list.length ? props.list[0].id : null
  });

  useEffect(() => {
    setContactListInput(currentState => {
      const updatedState = {
        ...currentState,
        list: props.list,
        rows: props.list.length,
        rowsPerPage: 5,
        page: 0
      };
      return updatedState;
    });
  }, [props.list]);

  const handlePageChange = (event, page) => {
    setContactListInput({
      ...contactListInput,
      page
    });
  };

  const handleRowPerPageChange = event => {
    setContactListInput({
      ...contactListInput,
      rowsPerPage: +event.target.value,
      page: 0
    });
  };

  const handleContactSelect = event => {
    setContactListInput({
      ...contactListInput,
      selectedContact: event.currentTarget.id
    });
    props.selectedContactDetails(event.currentTarget.id);
  };

  // yet to be implemented will use for delete
  const selectAllContacts = event => {};
  /* will add pagination soon */
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
              {(contactListInput.rowsPerPage < 0
                ? contactListInput.list
                : contactListInput.list.slice(
                    contactListInput.page * contactListInput.rowsPerPage,
                    contactListInput.page * contactListInput.rowsPerPage +
                      contactListInput.rowsPerPage
                  )
              ).map(contact => (
                <TableRow
                  hover
                  role="checkbox"
                  key={contact.id}
                  id={contact.id}
                  classes={{ hover: "table-row-hover" }}
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
            {contactListInput.rows >= 5 ? (
              <TableFooter>
                <TableRow>
                  <TablePagination
                    rowsPerPageOptions={[
                      5,
                      10,
                      25,
                      { label: "All", value: -1 }
                    ]}
                    count={contactListInput.rows}
                    rowsPerPage={contactListInput.rowsPerPage}
                    page={contactListInput.page}
                    SelectProps={{
                      inputProps: { "aria-label": "rows per page" },
                      native: true
                    }}
                    onChangePage={handlePageChange}
                    onChangeRowsPerPage={handleRowPerPageChange}
                  />
                </TableRow>
              </TableFooter>
            ) : (
              ""
            )}
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default React.memo(ContactList);
