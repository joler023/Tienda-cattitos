import TYPES from "./actionTypes";
import { img } from "../assets/imagenes";

export const productsInitialState = {
  products: [
    {
      id: 1,
      img: img.dogchow,
      name: "Dog Chow",
      price: 50,
    },
    {
      id: 2,
      img: img.collar,
      name: "Collar",
      price: 30,
    },
    {
      id: 3,
      img: img.arena,
      name: "Arena petys",
      price: 40,
    },
    {
      id: 4,
      img: img.raton,
      name: "Juguete catnip",
      price: 78,
    },
    {
      id: 5,
      img: img.hueso,
      name: "Hueso premio",
      price: 90,
    },
    {
      id: 6,
      img: img.rastrillo,
      name: "Caja para conejos",
      price: 60,
    },{
      id: 7,
      img: img.dogchow,
      name: "Dog Chow",
      price: 45,
    },
    {
      id: 8,
      img: img.collar,
      name: "Collar",
      price: 28,
    },
    {
      id: 9,
      img: img.arena,
      name: "Arena petys",
      price: 40,
    },
    {
      id: 10,
      img: img.raton,
      name: "Juguete catnip",
      price: 74,
    },
    {
      id: 11,
      img: img.hueso,
      name: "Hueso premio",
      price: 92,
    },
    {
      id: 12,
      img: img.rastrillo,
      name: "Caja para conejos",
      price: 60,
    },{
      id: 13,
      img: img.dogchow,
      name: "Dog Chow",
      price: 56,
    },
    {
      id: 14,
      img: img.collar,
      name: "Collar",
      price: 30,
    },
    {
      id: 15,
      img: img.arena,
      name: "Arena petys",
      price: 48,
    },
    {
      id: 16,
      img: img.raton,
      name: "Juguete catnip",
      price: 88,
    },
  ],
  cart: [],
  totalPriceShoppingCart: 0,
};

export const reducerCart = (state, action) => {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
      let newProduct = state.products.find(
        (product) => product.id === action.payload
      );
      return {
        ...state,
        cart: [...state.cart, newProduct],
      };
    }
    case TYPES.DELETE_PRODUCT_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload),
      };
    }

    case TYPES.DELETE_ALL_FROM_CART: {
      return productsInitialState;
    }

    case TYPES.CALCULATE_TOTAL_PRICE_OF_THE_CART: {
      return {
        ...state,
        totalPriceShoppingCart: state.cart.reduce(
          (previousValue, product) => previousValue + product.price,
          0
        ),
      };
    }
    default:
      return state;
  }

  throw Error("Unknown action: " + action.type);
};
