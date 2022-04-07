import React from "react";
import "./Contacts.css";
import email from "../images/email.png";
import home from "../images/home.png";
import phone from "../images/phone.png";
import user from "../images/user.png";
import ContactListItem from "../components/ContactListItem";
import { Initial } from "react-initial";

async function postData() {
  // Default options are marked with *
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

postData().then((data) => {
  console.log(data); // JSON data parsed by `data.json()` call
});

const Contacts = () => {
  return (
    <div className="contactsPage">
      <div className="contactsList">
        <p className="contactListTitle">Contacts List</p>
        <ContactListItem item={{}} />
        <ContactListItem />
        <ContactListItem />
      </div>
      <div className="contactInformation">
        <div className="title">
          <Initial
            name="M"
            className="titleLogo"
            seed={5}
            height={80}
            width={80}
            fontSize={50}
          />
          <div className="titleWords">
            <h1 className="titleName">Mike Liang</h1>
            <h2 className="titleJob">Mathnasium</h2>
            <div className="titleDescription">
              <li>Multi-layered client-server neural-net</li>
              <li> harness real-time e-markets</li>
            </div>
          </div>
        </div>
        <div className="information">
          <div className="informationBox">
            <div className="boxInfo">
              <img className="infoLogo" src={phone} alt="phone logo" />
              <p>04680380190</p>
            </div>
            <div className="boxInfo">
              <img className="infoLogo" src={home} alt="home logo" />
              <p>2a finchley place</p>
            </div>
          </div>
          <div className="informationBox">
            <div className="boxInfo">
              <img className="infoLogo" src={email} alt="email logo" />
              <p>mike.liang839@gmai.com </p>
            </div>
            <div className="boxInfo">
              <img className="infoLogo" src={user} alt="user logo" />
              <p>oneshot303</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contacts;
