import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux'
import { add,decrease } from "../slices/productslice"; 


const Products = () => {
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    setTimeout(() => navigate("/"), 3000);
  };

  let data = useSelector((state)=>state.product)
  let dispatch = useDispatch()

  console.log(data);
  
  return (
    <div>
      <h1></h1>
      <ul>
        {data.map(({ id, name, des ,qty,price}) => (
          <li key={id}>
            <Link to={id}>{name}</Link>
            <div>{des}</div>
            <p>price = {price}</p>
            <div>count {qty}</div>

            <p>total = {qty * price}</p>

            <button onClick={()=>dispatch(add(id))}>add</button> 
            <button onClick={()=>dispatch(decrease(id))}>decrease</button>
          </li>
        ))}
      </ul>
{/* 
      <form action="" onSubmit={submitHandler}>
        <input type="text" name="name" id="" />
        <button>Submit</button>
      </form> */}
    </div>
  );
};

export default Products;
