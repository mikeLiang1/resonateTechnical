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
import { useParams } from "react-router-dom";

const Contacts = () => {
  const [currentUser, setCurrentUser] = useState({
    name: "loading...",
    company: { name: "", bs: "", catchPhrase: "" },
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
    // let data;
    // try {
    //   data = await response.json();
    // } catch {
    //   console.log("error");
    // }
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
          {allUsers.length === 0 ? (
            <Initial
              name="L"
              className="titleLogo"
              seed={5}
              height={80}
              width={80}
              fontSize={50}
            />
          ) : (
            <Initial
              name={currentUser.name}
              className="titleLogo"
              seed={5}
              height={80}
              width={80}
              fontSize={50}
            />
          )}

          <div className="titleWords">
            <h1 className="titleName">
              {allUsers.length === 0 ? "loading" : currentUser.name}
            </h1>
            <h2 className="titleJob">
              {allUsers.length === 0 ? "loading" : currentUser.company["name"]}
            </h2>
            <div className="titleDescription">
              {allUsers.length === 0 ? (
                "loading"
              ) : (
                <>
                  <p>{currentUser.company["catchPhrase"]}</p>
                  <p>{currentUser.company["bs"]}</p>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="information">
          <div className="informationBox">
            <div className="boxInfo">
              <img className="infoLogo" src={phone} alt="phone logo" />
              {allUsers.length === 0 ? "loading" : <p>{currentUser.phone}</p>}
            </div>
            <div className="boxInfo">
              <img className="infoLogo" src={home} alt="home logo" />
              {allUsers.length === 0 ? (
                "loading"
              ) : (
                <p>
                  {currentUser.address["street"] +
                    " " +
                    currentUser.address["city"]}
                </p>
              )}
            </div>
          </div>
          <div className="informationBox">
            <div className="boxInfo">
              <img className="infoLogo" src={email} alt="email logo" />
              {allUsers.length === 0 ? "loading" : <p>{currentUser.email}</p>}
            </div>
            <div className="boxInfo">
              <img className="infoLogo" src={userImg} alt="user logo" />
              {allUsers.length === 0 ? (
                "loading"
              ) : (
                <p>{currentUser.username}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contacts;
