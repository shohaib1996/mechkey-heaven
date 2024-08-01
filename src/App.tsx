/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react"; // Assuming you are using SweetAlert

import { useAppSelector } from "./redux/hooks/hook";
import MainLayout from "./layout/MainLayout";

const App = () => {
  const cartItems = useAppSelector((state) => state.cart.items);
  useEffect(() => {
    if (cartItems.length > 0) {
      window.onbeforeunload = function () {
        return true;
      };
    }

    return () => {
      window.onbeforeunload = null;
    };
  }, [cartItems.length]);
  return (
    <div>
      <MainLayout />
    </div>
  );
};

export default App;
