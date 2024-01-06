import React, { useState } from "react";
import Navbar from "../component/Navbar";
import { Link } from "react-router-dom";
import Loginimg from "../component/illus1.png";
import { useNavigate } from "react-router-dom";

function Login() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const [loginText,setLoginText] = useState("Log In")

  const handleSubmit = async (e) => {
    
    if(!credentials.email || !credentials.password){
      alert('please fill all details')
    }
    else{
      
    e.preventDefault();
    let data = await fetch("https://witty-newt-pinafore.cyclic.app/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    let result = await data.json(); //<-------------------------------
    console.log(result); //|
    //|
    if (!result.success) {
      //|
      alert("Please fill out all fields correctly"); //|
    } else {
      //|
      setLoginText("Logging ...")
      setTimeout(()=>{
        console.log("logged in succesfully with "+credentials.email); //|
        localStorage.setItem("authToken", result.authToken); //<-----------
        localStorage.setItem("userEmail", credentials.email); //<-----------
        // console.log(localStorage.getItem("authToken", result.authToken));
        navigate("/");
      },500);
    }
  }
  };



  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Navbar />
      <div className="login container-fluid ">
        <div className="login-form">
          <div>
            <img
              src={Loginimg}
              alt="img"
              height="400px"
              width="300px"
              className="login-img"
              style={{ borderRadius: "30px", order: "1",objectFit:'cover' }}
            />
          </div>

          <form className="form-L">
            <h2>Log In</h2>

            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                onChange={onChange}
                name="email"
                value={credentials.email}
                id="email"
                autoComplete="off"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group me-auto">
              <label htmlFor="pass">Password</label>
              <input
                type="password"
                onChange={onChange}
                name="password"
                value={credentials.password}
                id="pass"
                autoComplete="off"
                placeholder="Password"
              />
            </div>
            <button
              type="submit"
              className="btn btn-success m-3 glow-green btn-h "
              style={{width:"150px"}}
              onClick={handleSubmit}
            >
             {loginText}
            </button>
            <Link to="/signup" className="m-3  btn btn-danger btn-h .glow-red" style={{width:"150px"}}>
              Not registered
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
