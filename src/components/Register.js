
import React, { useState } from "react";
import "../components/register.css";

function Register({setShowLogIn, onLogIn}) {
  const [myForm, setMyForm] = useState({
    fullname: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const [errors, setErrors] = useState({
    error: "",
    
  });

  

  const onChangeBinder = (e) => {
    setMyForm((myForm) => ({
      ...myForm,
      [e.target.name]: e.target.value,
    }));
  };
  
  
  function handleSubmit(e) {
    e.preventDefault();
    console.log(myForm)
    
    fetch("http://localhost:3000/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myForm),
    }).then((r) => {
     
      if (r.ok) {
        r.json().then((user) => onLogIn(user));
      } else {
        r.json().then((err) => alert(err.error));
        
      }
    });
  }

  return (
    <>
      <div className="container">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Hey friend, you gotta register!</h2>
          <div className="form-control">
            <label for="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Enter username"
              name="fullname"
              onChange={onChangeBinder}
            />
            <small>Error message</small>
          </div>
          <div className="form-control">
            <label for="email">Email</label>
            <input
              type="text"
              id="email"
              placeholder="Enter email"
              name="email"
              onChange={onChangeBinder}
            />
            <small>Error message</small>
          </div>
          <div className="form-control">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              name="password"
              onChange={onChangeBinder}
            />
            <small>Error message</small>
          </div>
          <div className="form-control">
            <label for="password">Confirm Password</label>
            <input
              type="password"
              id="password"
              placeholder="Confirm password"
              name="password_confirmation"
              onChange={onChangeBinder}
            />
            <small>Error message</small>
          </div>
          <button type="submit">Submit</button>
        </form>
          <p>
              Already have an account?
              <button  onClick={() => setShowLogIn(true)}>
                Log In
              </button>
          </p>
        
      </div>
    </>
  );
}

export default Register;