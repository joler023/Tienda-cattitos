import React from "react";
import Style from "../style/Tienda.css";

export default function ShoppingCartProduct({data,deleteFromCart}) {
  return (
    <div className="after-container">
      <div className="row">
        <img src={data.img} className="img-after col-sm-2 col-md-2 col-lg-2 col-xl-2" alt="" />
        <h2 className="name-after col-sm-4 col-md-4 col-lg-4 col-xl-4">{data.name}</h2>
        <p className="price-after col-sm-4 col-md-4 col-lg-4 col-xl-4">Price: <span className="price">${data.price}</span></p>
        <button className="btn-after col-sm-2 col-md-2 col-lg-2 col-xl-2" onClick={() => deleteFromCart(data.id)}>Delete</button>
      </div>
    </div>
  );
}
