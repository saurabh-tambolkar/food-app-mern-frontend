import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import Modal from "../Modal";
import Cart from "../screen/Cart";
import { useCart } from "./ContextReducer";

function Navbar(props) {
  let auth = localStorage.getItem("authToken");
  let userEmail = localStorage.getItem("userEmail");

  const removeAuth = () => {
    localStorage.removeItem("authToken");
  };

  const [cartview,setCartview] = useState(false)

  let number = useCart();
  number = number.state;
  number = number.length;
  // console.log(number)

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-success">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1" to="/">
            FoodApp
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item fs-5 ">
                <Link
                  className="nav-link m-2 navlink active"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>

              {auth ? (
                <li className="nav-item fs-5 navlink ">
                  <Link
                    className="nav-link m-2 active"
                    aria-current="page"
                    to="/myorder"
                  >
                    My Orders
                  </Link>
                </li>
              ) : null}
            </ul>

            {auth ? (
              <div className="d-flex after-auth" >
                <div className="d-flex mx-2 mt-1" >
                  <p><b>Logged In as : </b></p>
                  <p style={{width: "100px", overflow: "hidden",textOverflow: "ellipsis",marginLeft:'10px'}}>{userEmail}</p>
                </div>
                
                <div className="auth-btn">
                <Link
                  className="btn p-2 rounded bg-white text-success mx-2"
                   onClick={()=>{setCartview(true)}}
                >
                  My Cart
                  <span style={{position:"absolute",top:"21px",right:"110px"}} className="translate-middle badge badge-cart rounded-pill bg-danger">
                    {number}
                  </span>
                  <FontAwesomeIcon icon={faCartPlus} className="mx-2" />
                </Link>
                {cartview ?<Modal onClose={()=>setCartview(false)}><Cart/></Modal>:null}
                <Link
                  className="btn p-2 rounded bg-danger text-white mx-2 btn-h"
                  onClick={removeAuth}
                  to="/login"
                >
                  Logout
                  <FontAwesomeIcon icon={faRightFromBracket} className="ms-2" />
                </Link>
                </div>
                </div>
            ) : (
              <div>
                <Link
                  className="btn p-2 rounded bg-white text-success mx-2 btn-h"
                  to="/login"
                >
                  Login
                  <FontAwesomeIcon icon={faDoorOpen} className="ms-2 icon" />
                </Link>
                <Link
                  className="btn p-2 rounded bg-white text-success mx-2 btn-h "
                  to="/signup"
                >
                  Sign Up
                  <FontAwesomeIcon icon={faUserPlus} className="ms-2" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
