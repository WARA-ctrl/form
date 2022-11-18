import "./App.css";
import { useState } from "react";

function App() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const [errorUserName, setErrorUserName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorRePassword, setErrorRePassword] = useState("");

  const [colorUserName, setColorUserName] = useState("");
  const [colorEmail, setColorEmail] = useState("");
  const [colorPassword, setColorPassword] = useState("");
  const [colorRePassword, setColorRePassword] = useState("");

  const validateForm = (e) => {
    e.preventDefault();
  };

  const checkInformation = () => {
    if (userName.length < 8) {
      setErrorUserName("Please provide a name(more than 8 characters).");
      setColorUserName("red");
    } else {
      setErrorUserName("");
      setColorUserName("");
    }

    if (email.includes("@")) {
      setErrorEmail("");
      setColorEmail("");
    } else {
      setErrorEmail("Password must more than 8 characters.");
      setColorEmail("red");
    }

    if (password.length < 8) {
      setErrorPassword("Password must more than 8 characters.");
      setColorPassword("red");
    } else {
      setErrorPassword("");
      setColorPassword("");
    }

    if (rePassword === password && rePassword.length > 8) {
      setErrorRePassword("");
      setColorRePassword("");
    } else {
      setErrorRePassword("Password is not same as before.");
      setColorRePassword("red");
    }

    // if (
    //   setErrorUserName("") &&
    //   setErrorEmail("") &&
    //   setErrorPassword("") &&
    //   setErrorRePassword("")
    // ) {
    //   setUserName("");
    //   setEmail("");
    //   setPassword("");
    //   setRePassword("");
    // }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={validateForm}>
        <h2>Information Form</h2>
        <div className="form-control">
          <label>Username</label>
          <input
            type="text"
            onChange={(e) => setUserName(e.target.value)}
            style={{ borderColor: colorUserName }}
          ></input>
          <small>{errorUserName}</small>
        </div>
        <div className="form-control">
          <label>Email</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            style={{ borderColor: colorEmail }}
          ></input>
          <small>{errorEmail}</small>
        </div>
        <div className="form-control">
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            style={{ borderColor: colorPassword }}
          ></input>
          <small>{errorPassword}</small>
        </div>
        <div className="form-control">
          <label>Confirm password</label>
          <input
            type="password"
            onChange={(e) => setRePassword(e.target.value)}
            style={{ borderColor: colorRePassword }}
          ></input>
          <small>{errorRePassword}</small>
        </div>
        <button onClick={() => checkInformation()}>Submit</button>
      </form>
    </div>
  );
}

export default App;
