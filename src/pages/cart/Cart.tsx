import Container from "../../utils/container/Container";
import Navbar from "../home/navbar/Navbar";
import Footer from "../home/footer/Footer";
import { useAppSelector } from "../../redux/hooks/hook";
import CartRows from "./cartRows/CartRows";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useAppSelector((state) => state.cart.items);
  //   console.log(cartItems);
  const { totalOrderPrice } = useAppSelector((state) => state.cart);
  //   console.log(totalOrderPrice);

  return (
    <div>
      <Navbar></Navbar>
      {cartItems?.length > 0 ? (
        <Container>
          <div className="min-h-screen">
            <div className="flex justify-end my-5">
              <Link to={`/checkout`}>
                <button className="btn-main">
                  <span>Proceed To Purchase</span>
                </button>
              </Link>
            </div>
            <div className="overflow-x-auto mt-5 mb-20">
              <table className="table text-center border-2">
                {/* head */}
                <thead>
                  <tr>
                    <th className="text-start">Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((keyboard) => (
                    <CartRows keyboard={keyboard} key={keyboard._id}></CartRows>
                  ))}
                </tbody>
              </table>
              <div className="text-end p-2 text-xl font-semibold">
                Total: ${totalOrderPrice.toFixed(2)}
              </div>
            </div>
          </div>
        </Container>
      ) : (
        <div className="text-center my-[23%] lg:text-5xl text-3xl font-bold">
          {" "}
          You don't have any product
        </div>
      )}

      <Footer></Footer>
    </div>
  );
};

export default Cart;
