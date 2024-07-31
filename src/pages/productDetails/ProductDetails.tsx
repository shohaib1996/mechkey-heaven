import { useParams } from "react-router-dom";
import Footer from "../home/footer/Footer";
import Navbar from "../home/navbar/Navbar";
import Container from "../../utils/container/Container";
import { Rating } from "@smastrom/react-rating";
import { useGetSingleProductQuery } from "../../redux/api/baseApi";

const ProductDetails = () => {
  const { id } = useParams();
  // console.log(id);

  const { data, isLoading } = useGetSingleProductQuery(id);
  // console.log(data);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#4A249D]"></div>
      </div>
    );
  }

  const product = data?.data;
  const { image, title, brand, quantity, price, rating, description } = product;

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
        <div className="card lg:card-side bg-base-100 shadow-xl my-20">
          <figure className="flex-1">
            <img className="h-[500px]" src={image} alt="Album" />
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
            <button className="btn-main w-full">
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
