import React, { useState } from "react";
import "./Contacts.css";
import ContactListItem from "../../components/ContactListItem";

const ContactList = (props, stateChanger) => {
  return (
    <div className="contactsList">
      <p className="contactListTitle">Contacts List</p>
      {props.list.map((item, id) => (
        <ContactListItem
          onClick={() => {
            stateChanger = { item };
          }}
          key={id}
          item={item}
        />
      ))}
    </div>
  );
};
export default ContactList;
