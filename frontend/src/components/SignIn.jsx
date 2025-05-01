import axios from "axios";
//// This is sample file just for testing not for use
export default function SignInForm () {
  const signin = (e) => {
    e.preventDefault();
    const data = {
        username: e.target.username.value,
        password: e.target.password.value
    }
    axios
      .post("/api/login_user", data, {
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
    <div id="signin"> <br></br>
        <hr /><br />
        <h1 className="text-5xl">Login Form</h1> <br />
      <form onSubmit={signin} id="signinForm" action="/login_user" method="post">
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input type="text" id="username" name="username" className="form-control" onkeyup="checkName()" />
          <span id="namemessage"></span>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Username
          </label>
          <input type="password" id="password" name="password" className="form-control" onkeyup="checkUsername()" />
          <span id="signup_usernamemessage"></span>
        </div>
        
        <div className="center-align-button">
          <button type="submit" className="btn btn-dark" id="signupSubmit" >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
