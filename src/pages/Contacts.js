import React from "react";
import "./Contacts.css";

const Contacts = () => {
  return (
    <div className="contactsPage">
      <div className="contactsList">
        <p>Mike</p>
        <p>Mike</p>
        <p>Mike</p>
      </div>
      <div className="contactInformation">
        <div className="title">
          <h1>Mike Liang</h1>
          <h2>Mathnasium</h2>
        </div>
        <div className="information">
          <div className="phoneEmail">
            <p>04683280</p>
            <p>dfkm</p>
          </div>
          <div className="adressUser">
            <p>2as </p>
            <p>dfs</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contacts;
