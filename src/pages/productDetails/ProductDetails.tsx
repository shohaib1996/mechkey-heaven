import { useLoaderData } from "react-router-dom";
import Footer from "../home/footer/Footer";
import Navbar from "../home/navbar/Navbar";
import Container from "../../utils/container/Container";
import { Rating } from "@smastrom/react-rating";

interface Keyboard {
  id: number;
  image: string;
  title: string;
  brand: string;
  availableQuantity: number;
  price: number;
  rating: number;
}

const ProductDetails = () => {
  const product = useLoaderData() as Keyboard;
  const { image, title, brand, availableQuantity, price, rating } = product;
  return (
    <>
      <Navbar></Navbar>
      <Container>
        <div className="mt-20 mb-20 flex justify-center items-center">
          <span className="title-icon"></span>
          <h2 className="mx-20 text-4xl font-extrabold mt-2">
            Product Details
          </h2>
          <span className="title-icon"></span>
        </div>
        <div className="card lg:card-side bg-base-100 shadow-xl my-20 gap-4">
          <figure className="flex-1">
            <img src={image} alt="Album" />
          </figure>
          <div className="card-body flex-1">
            <h2 className="card-title">{title}</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
            <p>
              <Rating
                style={{ maxWidth: 100 }}
                readOnly
                halfFillMode="svg"
                value={rating}
              />
            </p>
            <p>{price}$</p>
            <p>{brand}</p>
            <p>{availableQuantity}</p>
            <button className="btn-main w-full">
              <span>See details</span>
            </button>
          </div>
        </div>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default ProductDetails;
