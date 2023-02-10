import React, { useReducer } from "react";
import ProductItem from "../components/ProductItem";
import Style from "../style/Tienda.css";
import ShoppingCartProduct from "../components/ShoppingCartProduct";
import {
  reducerCart,
  productsInitialState,
} from "../reducers/shoppingCartReducer";
import TYPES from "../reducers/actionTypes";

export default function Tienda() {
  const [state, dispatch] = useReducer(reducerCart, productsInitialState);

  const addToCart = (id) => {
    dispatch({
      type: TYPES.ADD_TO_CART,
      payload: id,
    });
  };

  const deleteFromCart = (id) => {
    dispatch({
      type: TYPES.DELETE_PRODUCT_FROM_CART,
      payload: id,
    });
  };

  const clearCart = () => {
    dispatch({
      type: TYPES.DELETE_ALL_FROM_CART,
    });
  };

  const calculateTotalPriceOfCart = () => {
    dispatch({ type: TYPES.CALCULATE_TOTAL_PRICE_OF_THE_CART });
  };

  return (
    <div className="nav-margin">
      <header className="bg-blue py-5">
        <div className="container px-4 px-lg-5 my-3">
          <div className="text-center">
            <h1 className="display-4 fw-bolder color-texto-shop1">TIENDA</h1>
            <p className="lead fw-normal color-texto-shop2 mb-0">
              Los mejores productos para tu peludo
            </p>
          </div>
        </div>
      </header>
      {/* div padre */}
      <section>
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-m-3 ">
            <div className="col mb-5 ">
              <div className="card h-100">
                <div className="container_grid_products">
                  {state.products.map((product) => {
                    return (
                      <ProductItem
                        key={product.id}
                        data={product}
                        addToCart={addToCart}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <div className="text-center">
          <h2 className="shopping">Shopping Cart</h2>
        </div>
        <div className="container_buttons text-center">
          <button
            className="btn btn_totalPrice"
            onClick={() => calculateTotalPriceOfCart()}
          >
            Total Price
          </button>
          {state.totalPriceShoppingCart > 0 && (
            <p>
              Total Price:{" "}
              <span className="price">${state.totalPriceShoppingCart}</span>
            </p>
          )}
          <button className="btn btn_ClearCart" onClick={() => clearCart()}>
            Clear cart
          </button>
        </div>
        <div className="text-center my-2">
          {state.cart.length === 0 && <p>There are no products in the cart</p>}
        </div>
        <div className="container px-4 px-lg-5 mt-5">
          {state.cart.map((productCart) => {
            return (
              <ShoppingCartProduct
                key={productCart.id + Math.random() * 50}
                data={productCart}
                deleteFromCart={deleteFromCart}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
