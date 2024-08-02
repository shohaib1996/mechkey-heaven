import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hook";
import Container from "../../utils/container/Container";
import Footer from "../home/footer/Footer";
import Navbar from "../home/navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { useAddOrdersMutation } from "../../redux/api/baseApi";
import { clearCart } from "../../redux/features/productSlice";

const CheckOut = () => {
  const { totalOrderPrice } = useAppSelector((state) => state.cart);
  const cartItems = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [addOrder] = useAddOrdersMutation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phNumber: "",
    address: "",
    payment: "cashOnDelivery",
  });

  // Handle input changes for all fields
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const products = cartItems.map((item) => ({
      product: item._id,
      quantity: item.cartQuantity,
    }));

    const orderDetails = {
      ...formData,
      products,
    };

    try {
      const res = await addOrder(orderDetails).unwrap();
      if (res?.success === true) {
        swal({
          title: "Product Confirmed!",
          text: "Successfull",
          icon: "success",
          // @ts-expect-error: Unreachable code error
          button: "Done",
        });
      }
      dispatch(clearCart()); // Assuming you have this action
      navigate("/order-confirmed"); // Redirect to a confirmation page
    } catch (error) {
      console.error("Failed to place order", error);
      swal("Failed!", "Order could not be placed", "error");
    }
  };
  return (
    <div>
      <Navbar></Navbar>
      <Container>
        <div className="min-h-screen">
          <div className="flex justify-center items-center space-x-10">
            <p className="title-icon mt-4"></p>
            <p className="text-3xl font-bold text-center mt-7">
              Total Amount: ${totalOrderPrice}
            </p>
            <p className="title-icon mt-4"></p>
          </div>
          <div>
            <form className="card-body" onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name*</span>
                </label>
                <input
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  name="name"
                  value={formData.name}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email*</span>
                </label>
                <input
                  onChange={handleInputChange}
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                  value={formData.email}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone Number*</span>
                </label>
                <input
                  onChange={handleInputChange}
                  type="text"
                  placeholder="phone number"
                  className="input input-bordered"
                  required
                  name="phNumber"
                  value={formData.phNumber}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Delivery Address*</span>
                </label>
                <input
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Address"
                  className="input input-bordered"
                  required
                  name="address"
                  value={formData.address}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Payment Method*</span>
                </label>
                <div className="flex items-center gap-3">
                  <input
                    onChange={handleInputChange}
                    value={formData.payment}
                    type="radio"
                    className="radio"
                    required
                  />
                  <span>Cash On Delivery</span>
                </div>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-main">
                  <span>Place Order</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default CheckOut;
