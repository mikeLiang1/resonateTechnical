import React, { useState } from "react";
import "./Contacts.css";
import ContactListItem from "../../components/ContactListItem";

const ContactList = ({ list, stateChanger }) => {
  return (
    <div className="contactsList">
      <p className="contactListTitle">Contacts List</p>
      {list.map((item, id) => (
        <ContactListItem
          onClick={() => {
            stateChanger(item);
          }}
          key={id}
          item={item}
        />
      ))}
    </div>
  );
};
export default ContactList;
