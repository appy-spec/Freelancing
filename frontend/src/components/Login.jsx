import { useState } from "react";
import { loginFields } from "../constants/FormFields";
import { useNavigate } from "react-router-dom";

import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import Input from "./Input";
import axios from "axios";

const fields = loginFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Login() {
  const navigate = useNavigate();

  const [loginState, setLoginState] = useState(fieldsState);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // 'success' or 'error'

  const handleChange = (e) => {
    const { id, value } = e.target;
    setLoginState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); // Clear any previous messages

    try {
      await authenticateUser();
    } catch (error) {
      setMessage("Login failed. Please check your credentials and try again.");
      setMessageType("error");
    }
  };

  const authenticateUser = async () => {
    await axios
      .post("/api/login_user", loginState, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if(response.data.userType === "EMPLOYEE")
          navigate("/homepage");
        else
          navigate("/homepage_admin");
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  };

  return (
    <div>
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="-space-y-px">
          {fields.map((field) => (
            <Input key={field.id} handleChange={handleChange} value={loginState[field.id]} labelText={field.labelText} labelFor={field.labelFor} id={field.id} name={field.name} type={field.type} isRequired={field.isRequired} placeholder={field.placeholder} />
          ))}
        </div>

        <FormExtra />
        <FormAction handleSubmit={handleSubmit} text="Login" />
      </form>
      {message && <div className={`message ${messageType === "success" ? "success" : "error"}`}>{message}</div>}
    </div>
  );
}
