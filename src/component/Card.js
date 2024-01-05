import React, { useEffect, useRef, useState } from "react";

import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCart, useDispatchCart } from "./ContextReducer";

// "https://source.unsplash.com/1400x600/?burger"
function Card(props) {

  let dispatch = useDispatchCart();
  let dataR = useCart();
  let priceRef = useRef();
  let options = props.options;
  let data = options[0];
  let foodItems = props.foodItems;
  let priceOptions = Object.keys(data);

  const [quantity,setQuantity] = useState(1);
  const [size,setSize] = useState("");

  let auth = localStorage.getItem("authToken");
  // console.log(auth);
  

  const handleAddToCart=async()=>{

    if(!auth){
      alert("Please Login to add item to cart!");
    }
    else{

      alert("Added to Cart");
      let food=[]
      for (const item in dataR){
        if(item.id === foodItems._id){
          food=item;
          break;
        }
      }
      if (food !=[]){
        if(food.size===size){
          await dispatch({type:'UPDATE',id:foodItems._id,price:finalPrice,quantity:quantity})
          return
        }
        else if(food.size !== size){
          await dispatch({type:"ADD",id:foodItems._id,name:foodItems.name,price:finalPrice,quantity:quantity,size:size,img:foodItems.img})
          return
        }
        return
      }
      await dispatch({type:"ADD",id:foodItems._id,name:foodItems.name,price:finalPrice,quantity:quantity,size:size,img:foodItems.img})
    }
  }

  
  useEffect(()=>{
    setSize(priceRef.current.value)
  },[quantity,options])
  let finalPrice = quantity*parseInt(options[size]);
  
  return (
      <div className="card m-4 bg-dark text-white round " style={{ width: "18rem",maxHeight:"500px",borderRadius:'20px' }}>
        <img src={foodItems.img} className="card-img-top" alt="..." height="200px" style={{borderRadius:"20px 20px 0px 0px",objectFit:"cover"}} />
        <div className="card-body" >
          <h5 className="card-title">{foodItems.name}</h5>
          <p className="card-text " style={{fontSize:"12px"}}>
            {foodItems.description}
          </p>
          <div className="container w-100 ">
            <select className="m-1 rounded h-100 bg-success fnt" onChange={(e)=> setQuantity(e.target.value)}>
            {
                Array.from(Array(6),(e,i)=>{
                    return (
                        <option key={i+1} value={i+1}>{i+1}</option>
                    )
                })
            }
            </select>
            <select className="m-1 rounded bg-success h-100 fnt" ref={priceRef} onChange={(e)=> setSize(e.target.value)} style={{width:"80px"}}>
                {
                 priceOptions.map((data)=>{
                  return <option value={data} key={data}>{data}</option>
                 })
                }
            </select>
            <div className="d-inline m-2 fnt">
                Total: {finalPrice}/-
            </div>
            <hr />
            <div className="d-flex justify-content-center">
            <button className="btn bg-success text-dark "  onClick={handleAddToCart}>Add to cart
            <FontAwesomeIcon icon={faCartShopping} className="mx-3"/>
            </button>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Card;
