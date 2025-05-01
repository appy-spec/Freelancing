import React, { useState } from "react";
import { signupFields } from "../constants/FormFields";
import FormAction from "./FormAction";
import Input from "./Input";
import axios from "axios";

export default function Signup() {
  const [signupState, setSignupState] = useState(() => {
    const initialState = {};
    signupFields.forEach((field) => {
      initialState[field.id] = "";
    });
    return initialState;
  });

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // 'success' or 'error'

  const sendOTP = (e) => {
    e.preventDefault();
    const email = signupState.emailId;
    const username = signupState.username;

    const data = { emailId: email, username: username };

    axios
      .post("/api/sendOTP", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setMessage(response.data.message);
        setMessageType("success");
      })
      .catch((error) => {
        console.error("Error sending OTP:", error);
        setMessage("Failed to send OTP");
        setMessageType("error");
      });
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setSignupState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); // Clear any previous messages

    try {
      const userType = document.getElementById("userType").value;

      const dataToSend = {
        ...signupState,
        userType,
      };

      const response = await axios.post("/api/signup_user", dataToSend, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200 || response.status === 201) {
        // Reset form
        const initialState = {};
        signupFields.forEach((field) => {
          initialState[field.id] = "";
        });
        setSignupState(initialState);
        setMessage(response.data.message);
        setMessageType("success");
      } else {
        throw new Error("Unexpected response status");
      }
    } catch (error) {
      console.error("Signup failed:", error);
      const msg = error.response?.data?.error || "Signup failed. Please try again.";
      setMessage(msg);
      setMessageType("error");
    }
  };

  return (
    <div>
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div>
          {signupFields.map((field) => (
            <Input
              key={field.id}
              handleChange={handleChange}
              value={signupState[field.id]}
              labelText={field.labelText}
              labelFor={field.labelFor}
              id={field.id}
              name={field.name}
              type={field.type}
              isRequired={field.isRequired}
              placeholder={field.placeholder}
            />
          ))}

          <label htmlFor="userType">You are a freelancer or client: </label>
          <select className="text-black" name="userType" id="userType">
            <option className="text-black" value="EMPLOYEE">
              Freelancer
            </option>
            <option className="text-black" value="EMPLOYER">
              Client
            </option>
          </select>
          <br />

          <button onClick={sendOTP} type="button">
            Send OTP
          </button>

          <FormAction handleSubmit={handleSubmit} text="Signup" />
        </div>
      </form>

      {message && (
        <div className={`message ${messageType === "success" ? "success" : "error"}`}>
          {message}
        </div>
      )}
    </div>
  );
}
