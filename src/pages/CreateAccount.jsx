import React, { useState } from "react";
import { db } from "firebase";
import { addDoc, collection } from "firebase/firestore";

const CreateAccount = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  const accountCollection = collection(db, "accounts");

  const createAccount = () => {
    if (
      (username != "", email != "", password != "", confirmedPassword != "")
    ) {
      if (password === confirmedPassword) {
        addDoc(accountCollection, {
          accountCreated: Date.now,
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
    <div className="container">
      <input type="text" placeholder="Username" />
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="Password" />
      <input type="text" placeholder="Confirm password" />
      <button type="submit" onSubmit={createAccount()}>
        Submit
      </button>
    </div>
  );
};

export default CreateAccount;
