import React from "react";
import Navbar from "../component/Navbar";
import { Link } from "react-router-dom";
import { useCart, useDispatchCart } from "../component/ContextReducer";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Cart() {
  let data = useCart();
  let dispatch = useDispatchCart();
  let finalData = data.state;
  // console.log(finalData);
  // console.log(finalData.length);
  let totalPrice = finalData.reduce((total, food) => total + food.price, 0);

  const handleCheckOut =async()=>{
    try{
      let userEmail = localStorage.getItem("userEmail");
      let date = new Date().toDateString();
      // console.log(date)
      let data=await fetch("https://food-app-mern-backend.onrender.com/api/order",{
        method:"POST",
        headers:{
          'Content-Type':'application/json'
        },
        credentials: 'include',
        body:JSON.stringify(
          {order_data:finalData,
            email:userEmail,
            // order_date:date
          }
          )
      })
      data = data.json();
      if(data.response===200 || data.response === 204){
        await dispatch({type:"DROP"})
      }
      console.log(data);
    }
    catch(err){
      console.log(err)
    }

  }

  return (
    <div>
      <div className="container m-auto w-100 h-100 ">
        <h2 className="m-5 text-center">Your Shopping Cart</h2>
        <hr />
        {finalData.length === 0 ? (
          <div>
            <h2>Ohh , the cart is empty !</h2>
          </div>
        ) : (
          <div>
            <table className="table rounded border-success w-100 ms-auto ">
              <thead>
                <tr>
                  <th scope="col" className="bg-success fs-5 ">
                    #
                  </th>
                  <th scope="col" className="bg-success fs-5 ">
                    Product
                  </th>
                  <th scope="col" className="bg-success fs-5 text-center ">
                    Quantity
                  </th>
                  <th scope="col" className="bg-success fs-5 text-center">
                    Option
                  </th>
                  <th scope="col" className="bg-success fs-5 text-right">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {finalData.map((data, index) => {
                  return (
                    <tr style={{ height: "30px" }}>
                      <th className="fs-5">{index + 1}</th>
                      <td className="fs-5">{data.name}</td>
                      <td className="fs-5">{data.quantity}</td>
                      <td className="fs-5">{data.size}</td>
                      <td className="fs-5">{data.price}</td>
                      <td
                        style={{
                          backgroundColor: "#424242",
                          width: "300px",
                          border: "none",
                        }}
                      >
                        <button
                          className="btn btn-danger text-white mx-2 w-10 "
                          style={{ height: "40px" }}
                          onClick={()=>{dispatch({type:'REMOVE',index:index})}}
                        >
                          Remove
                          <FontAwesomeIcon icon={faXmark} className="mx-2" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <h4 className="mt-5">Total amount: {totalPrice}</h4>
            <button
              className="btn btn-success text-white m-5 "
              style={{ height: "40px" }}
              onClick={handleCheckOut}
            >
              Check out
              <FontAwesomeIcon icon={faCheck} className="text-white mx-2" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
