import React, { useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { useEffect } from "react";

function Myorder() {
  const [orderData, setOrderData] = useState([]);

  const fetchMyOrder = async () => {
    console.log(localStorage.getItem("userEmail"));
    let response = await fetch("https://witty-newt-pinafore.cyclic.app/api/myorder", {
      // credentials: 'include',
      // Origin:"http://localhost:3000/login",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: localStorage.getItem("userEmail"),
      }),
    })
    response = await response.json();
    let finalResponse = response.orderData.order_data
    // console.log(finalResponse);
    let arrayResponse =finalResponse.flat();
    console.log(arrayResponse)
    await setOrderData(arrayResponse);

    // await response.map((data)=>{
    //    console.log(data)
    // })
  };

  useEffect(() => {
    fetchMyOrder();
  }, []);

  return (
    <div>
      <Navbar />
      <div>
        <h1 className="text-center mt-5">My Orders</h1>
        <div className="container">
          <div className="row">
            {orderData !== {}
              ? orderData.map((data) => {
                  return data.orderData
                    ? data.orderData.order_data
                        .slice(0)
                        .reverse()
                        .map((item) => {
                          return item.map((arrayData) => {
                            return (
                              <div>
                                {arrayData.order_date ? (
                                  <div className="m-auto mt-5">
                                    {(data = arrayData.Order_date)}
                                    <hr />
                                  </div>
                                ) : (
                                  <div className="col-12 col-md-6 col-lg-3">
                                    <div
                                      className="card mt-3"
                                      style={{
                                        width: "16rem",
                                        maxHeight: "360px",
                                      }}
                                    >
                                      <img
                                        src={arrayData.img}
                                        className="card-img-top"
                                        alt="..."
                                        style={{
                                          height: "120px",
                                          objectFit: "fill",
                                        }}
                                      />
                                      <div className="card-body">
                                        <h5 className="card-title">
                                          {arrayData.name}
                                        </h5>
                                        <div
                                          className="container w-100 p-0"
                                          style={{ height: "38px" }}
                                        >
                                          <span className="m-1">
                                            {arrayData.qty}
                                          </span>
                                          <span className="m-1">
                                            {arrayData.size}
                                          </span>
                                          <span className="m-1">{data}</span>
                                          <div className=" d-inline ms-2 h-100 w-20 fs-5">
                                            ₹{arrayData.price}/-
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>
                            );
                          });
                        })
                    : "";
                })
              : ""}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Myorder;
