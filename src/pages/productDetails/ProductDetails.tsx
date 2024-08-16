import { useParams } from "react-router-dom";
import Footer from "../home/footer/Footer";
import Navbar from "../home/navbar/Navbar";
import Container from "../../utils/container/Container";
import { Rating } from "@smastrom/react-rating";
import { useGetSingleProductQuery } from "../../redux/api/baseApi";
import { useAppDispatch, useAppSelector } from "./../../redux/hooks/hook";
import { addToCart } from "../../redux/features/productSlice";

const ProductDetails = () => {
  const { id } = useParams();
  // console.log(id);
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);
  const { totalOrderPrice } = useAppSelector((state) => state.cart);
  console.log(totalOrderPrice, cartItems);

  const { data, isLoading } = useGetSingleProductQuery(id);
  // console.log(data);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#4A249D]"></div>
      </div>
    );
  }

  const products = data?.data;
  const { image, title, brand, quantity, price, rating, description, _id } =
    products;

  const handleAddToCart = () => {
    const product = {
      _id,
      image,
      title,
      brand,
      quantity,
      price,
      rating,
      description,
    };

    // Check if the product is already in the cart
    const cartItem = cartItems.find((item) => item._id === product._id);

    // If the product is in the cart and its quantity is less than or equal to 0
    if (cartItem && cartItem.quantity <= 0) {
      swal({
        title: "Product is out of stock!",
        text: "This product is no longer available.",
        icon: "error",
      });
      return;
    }

    // If the product is not in the cart and its quantity is less than or equal to 0
    if (!cartItem && product.quantity <= 0) {
      swal({
        title: "Product is out of stock!",
        text: "This product is no longer available.",
        icon: "error",
      });
      return;
    }

    // If the product is in stock, add it to the cart
    dispatch(addToCart(product));

    // Show success message
    swal({
      title: "Product added to cart!",
      text: "Successfully added to your cart.",
      icon: "success",
    });
  };

  return (
    <>
      <Navbar></Navbar>
      <Container>
        <div className="mt-20 mb-20 flex justify-center items-center">
          <span className="title-icon"></span>
          <h2 className="mx-10 lg:mx-20 text-xl lg:text-4xl font-extrabold mt-2">
            Product Details
          </h2>
          <span className="title-icon"></span>
        </div>
        <div className="card lg:card-side bg-base-100 shadow-xl my-10 lg:my-20">
          <figure className="flex-1">
            <img className="h-[350px] lg:h-[500px]" src={image} alt="Album" />
          </figure>
          <div className="card-body flex-1 bg-slate-200 rounded-r-md">
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
            <p>
              <Rating
                style={{ maxWidth: 100 }}
                readOnly
                halfFillMode="svg"
                value={rating}
              />
            </p>
            <p>Price: {price}$</p>
            <p>Brand: {brand}</p>
            <p>Quantity: {quantity}</p>
            <button onClick={handleAddToCart} className="btn-main w-full">
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default ProductDetails;
