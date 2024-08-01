import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Keyboard {
  _id: string;
  image: string;
  title: string;
  brand: string;
  quantity: number;
  price: number;
  rating: number;
  description: string;
}

export interface CartItem extends Keyboard {
  cartQuantity: number;
}

export interface CartState {
  items: CartItem[];
  totalOrderPrice: number;
}

const initialState: CartState = {
  items: [],
  totalOrderPrice: 0,
};

const showAlert = (message: string) => {
  swal({
    title: message,
    text: "Out of Stock!",
    icon: "error",
  });
};

export const productSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Keyboard>) => {
      console.log(action.payload);
      const product = action.payload;
      const existingItem = state.items.find((item) => item._id === product._id);

      console.log(existingItem);

      if (existingItem) {
        console.log("exist");
        if (existingItem.quantity > 0) {
          existingItem.quantity = existingItem.quantity - 1;
          existingItem.cartQuantity += 1;
          state.totalOrderPrice += product.price;
        } else {
          console.log("exist");
          return showAlert("Product is out of stock!");
        }
      } else {
        console.log("new");

        if (product.quantity > 0) {
          product.quantity = product.quantity - 1;
          state.items.push({ ...product, cartQuantity: 1 });
          state.totalOrderPrice += product.price;
        } else {
          showAlert("Product is out of stock!");
        }
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      const existingItem = state.items.find((item) => item._id === productId);

      if (existingItem) {
        state.totalOrderPrice -= existingItem.price * existingItem.cartQuantity;
        existingItem.quantity += existingItem.cartQuantity;
        state.items = state.items.filter((item) => item._id !== productId);
      }
    },
    incrementQuantity: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      const existingItem = state.items.find((item) => item._id === productId);

      if (existingItem) {
        if (existingItem.quantity > 0) {
          existingItem.cartQuantity += 1;
          existingItem.quantity -= 1;
          state.totalOrderPrice += existingItem.price;
        } else {
          showAlert("Product is out of stock!");
        }
      }
    },
    decrementQuantity: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      const existingItem = state.items.find((item) => item._id === productId);

      if (existingItem) {
        if (existingItem.cartQuantity > 1) {
          existingItem.cartQuantity -= 1;
          existingItem.quantity += 1;
          state.totalOrderPrice -= existingItem.price;
        } else {
          state.totalOrderPrice -= existingItem.price;
          existingItem.quantity += 1;
          state.items = state.items.filter((item) => item._id !== productId);
        }
      }
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} = productSlice.actions;

export default productSlice.reducer;
