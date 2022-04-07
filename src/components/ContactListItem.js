import React from "react";
import { Initial } from "react-initial";

function NavBar({ item }) {
  return (
    <div className="contactListItem">
      <Initial
        className="contactImage"
        name="M"
        seed={5}
        height={40}
        width={40}
        fontSize={20}
      />
      <p>Mike</p>
    </div>
  );
}
export default NavBar;
