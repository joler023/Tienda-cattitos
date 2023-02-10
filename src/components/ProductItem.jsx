import React from "react";
import styles from "../style/ProductItem.css";
import Style from "../style/Tienda.css";
import { img } from "../assets/imagenes.js";

export default function ProductoItem({ data, addToCart }) {
  return (
    <div className="">
      <img src={data.img} className="card-img-top img-shop px-2 " alt="" />
      <div className="card-body p-4">
        <div className="text-center">
          <h5 className="fw-bolder">{data.name}</h5>
          <span>Price: ${data.price}</span>
        </div>
      </div>
      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div className="text-center">
          <button
            className="btn btn-outline-dark mt-auto"
            onClick={() => addToCart(data.id)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
