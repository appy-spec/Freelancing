import axios from "axios";
//// This is sample file just for testing not for use

export default function SignUpForm () {
  const sendOTP = (e) => {
    const email = document.getElementById("emailId").value;
    const username = document.getElementById("username").value;
    e.preventDefault();
    const data = {
      emailId: email,
      username: username
    }
    axios
      .post("/sendOTP", data, {
        headers: {
          "Content-Type": "application/json", 
        },
      })
      .then((response) => {
        console.log("Form successfully submitted:", response.data.message);
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  }
  const signup = (e) => {
    e.preventDefault();
    const data = {
        name: e.target.name.value,
        emailId: e.target.emailId.value,
        username: e.target.username.value,
        password: e.target.password.value,
        otp: e.target.otp.value,
    }
    axios
      .post("/signup_user", data, {
        headers: {
          "Content-Type": "application/json", 
        },
      })
      .then((response) => {
        console.log("Form successfully submitted:", response.data);
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  };

    return (
    <div id="signup">
      <form onSubmit={signup} id="signupForm" action="/signup_user" method="post">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input type="text" id="name" name="name" className="form-control" onkeyup="checkName()" />
          <span id="namemessage"></span>
        </div>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input type="text" id="username" name="username" className="form-control" onkeyup="checkUsername()" />
          <span id="signup_usernamemessage"></span>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input type="password" id="signuppassword" name="password" className="form-control" onkeyup="checkPassword()" />
          <span id="signup_passwordmessage"></span>
        </div>
        <div className="mb-3">
          <label htmlFor="emailId" className="form-label">
            Email Id:
          </label>
          <input type="email" id="emailId" name="emailId" className="form-control" onkeyup="checkPassword()" />
          <span id="signup_passwordmessage"></span>
        </div>
        <div className="mb-3">
          <label htmlFor="otp" className="form-label">
            OTP:
          </label>
          <input type="number" id="otp" name="otp" className="form-control" onkeyup="checkPassword()" />
          <span id="signup_passwordmessage"></span>
        </div>
        <button onClick={sendOTP}>SEND OTP</button>
        <div className="center-align-button">
          <button type="submit" className="btn btn-dark" id="signupSubmit" >
            Submit
          </button>
          {/* <div className="circular-buffer" id="signup_buffer" style="display: none;"></div> */}
        </div>
      </form>
    </div>
  );
};
