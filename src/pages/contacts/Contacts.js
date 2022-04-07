import React, { useEffect, useState } from "react";
import "./Contacts.css";
import email from "../../images/email.png";
import home from "../../images/home.png";
import phone from "../../images/phone.png";
import userImg from "../../images/user.png";
import ContactListItem from "../../components/ContactListItem";
import { Initial } from "react-initial";
import ContactList from "./ContactList";
import userEvent from "@testing-library/user-event";

const Contacts = () => {
  const [currentUser, setCurrentUser] = useState({
    name: "defaultName",
    company: { name: "default", bs: "default", catchPhrase: "" },
  });

  const [allUsers, setAllUsers] = useState([]);

  const getUsers = async () => {
    const requestOptions = {
      method: "GET",
    };

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users",
      requestOptions
    );
    const data = await response.json();

    setCurrentUser(data[0]);
    setAllUsers(data);
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="contactsPage">
      <ContactList list={allUsers} stateChanger={setCurrentUser} />
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
            <h1 className="titleName">{currentUser.name}</h1>
            <h2 className="titleJob">{currentUser.company["name"]}</h2>
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
              <img className="infoLogo" src={userImg} alt="user logo" />
              <p>oneshot303</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contacts;
