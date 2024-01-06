import React, { useState, useEffect } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Card from "../component/Card";

function Home() {
  const [foodItems, setFoodItems] = useState([]);
  const [foodCat, setFoodCat] = useState([]);

  const [search, setSearch] = useState("");

  const [loading,setLoading] = useState(true);

  const [data, setData] = useState(null);

  // useEffect(() => {

  //   try {
  //     let loadData = async () => {
  //       //get food items data
  //       // http://localhost:5000/api/fooddata
  //       // https://witty-newt-pinafore.cyclic.app
  //       let response = await fetch("https://witty-newt-pinafore.cyclic.app/api/fooddata", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       });
  //       let response2 = await response.json();
  //       console.log(`response 2  : ${response2}`)
  //       setFoodItems(response2[0]);
  //       setFoodCat(response2[1]);
  //       setLoading(false);
  //     };
  //     loadData();
  //     // setTimeout(()=>{
  //     //   console.log('loaded')
  //     // },1500)
  //   } catch (error) {
  //     console.log("error is" + error);
  //     setLoading(false);
  //   }
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://witty-newt-pinafore.cyclic.app/api/fooddata', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
  
        const result = await response.json();
        let result1 = result[0];
        let result2 = result[1];
  
        // Use optional chaining to handle potential undefined values
        result1 && setFoodItems(result1);
        result2 && setFoodCat(result2);
  
        // console.log(result[1]);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle errors, set state, show error messages, etc.
      }
    };
  
    fetchData();
  }, []);
  

  return (

    
    
    <div>
        
      <Navbar/>
      
     
      <div>
        <div
          id="carouselExampleCaptions"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
          style={{ objectFit: "contain !important" }}
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-caption" style={{ zIndex: "2" }}>
            <div className="d-flex justify-content-center" role="search">
              <input
                className="c-input form-control text-white me-2 w-50 "
                style={{
                  background: "rgba(255,255,255,0.4)",
                  border: "2px solid white",
                }}
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              {/* <button
                className="btn bg-success text-white btn-outline-success"
                type="submit"
              >
                Search
              </button> */}
            </div>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item img-div active">
              <img
                src="https://source.unsplash.com/1500x400/?pizza"
                style={{ objectFit: "contain", filter: "brightness(50%" }}
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item img-div">
              <img
                src="https://source.unsplash.com/1500x400/?burger"
                style={{ filter: "brightness(50%" }}
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item img-div">
              <img
                src="https://source.unsplash.com/1500x400/?pizza"
                style={{ filter: "brightness(50%" }}
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

     
      <div className="container-fluid  ">
        {foodCat.length > 0
          ? foodCat.map((data) => {
              return (
                <div className="row m-3">
                  <div key={data._id} className="fs-3 m-3 place-items-center">
                    {data.CategoryName}
                  </div>
                  <hr />
                  {foodItems.length > 0
                    ? foodItems
                        .filter(
                          (item) =>
                            item.CategoryName === data.CategoryName && item.name.toLowerCase().includes(search.toLowerCase())
                        )
                        .map((filterItems, index) => {
                          return (
                            <div
                              key={index}
                              className=" col-12 col-md-6 col-lg-4 col-xl-3"
                            >
                              <Card
                                key={filterItems._id}
                                options={filterItems.options}
                                foodItems={filterItems}
                              />
                            </div>
                          );
                        })
                    : "No data found"}
                </div>
              );
            })
          : ""}
      </div>
      
      <Footer />
    </div>
    
    
  );
}

export default Home;
