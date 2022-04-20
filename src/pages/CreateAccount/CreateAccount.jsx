import React, { useState } from "react";
import { db } from "../../firebase/firebase-config.js";
import { addDoc, collection } from "firebase/firestore";
import "./CreateAccount.scss";

const CreateAccount = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  const accountCollection = collection(db, "accounts");

  const submitAccount = async (e) => {
    e.preventDefault();
    if (
      (username !== "", email !== "", password !== "", confirmedPassword !== "")
    ) {
      let date = Date.now();

      if (password === confirmedPassword) {
        await addDoc(accountCollection, {
          accountCreated: date,
          accountDetails: {
            username: username,
            password: password,
            email: email,
          },
        });
      } else {
        return <p className="error">Passwords do no match, please try again</p>;
      }
    } else {
      return (
        <p className="error">
          Not all fields have been filled, please try again
        </p>
      );
    }
  };

  return (
    <div className="create-account">
      <form className="create-form" onSubmit={(e) => submitAccount(e)}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm password"
          value={confirmedPassword}
          onChange={(e) => setConfirmedPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateAccount;
