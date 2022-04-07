import React from "react";
import { Initial } from "react-initial";

function ContactListItem({ item, onClick }) {
  //console.log(item);
  console.log(item);
  return (
    <div className="contactListItem" onClick={onClick}>
      <Initial
        className="contactImage"
        name={item.name}
        seed={5}
        height={40}
        width={40}
        fontSize={20}
      />
      <p>{item.name}</p>
    </div>
  );
}
export default ContactListItem;
