import Container from "../../../utils/container/Container";
import "../../../style/btn.css";
import "../../../style/advertisement.css";
import { Link } from "react-router-dom";
import Cards from "../../../utils/card/Cards";
import { useGetProductsQuery } from "../../../redux/api/baseApi";

// Define the interface for the keyboard data
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

const FeatureProduct = () => {
  // Use the interface to type the state

  const { data, isLoading } = useGetProductsQuery(undefined);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#4A249D]"></div>
      </div>
    );
  }

  console.log(data.data);

  return (
    <Container>
      <div className="mb-14 flex justify-between items-center">
        <div className="flex justify-start items-center gap-10">
          <p className="title-icon"></p>
          <h1 className="text-4xl font-bold mt-2">Feature Products</h1>
        </div>
        <div>
          <Link to={`/products`}>
            <button className="btn-main">
              <span>See More</span>
            </button>
          </Link>
        </div>
      </div>
      <hr className="mb-14 border-1" />
      <div className="grid grid-cols-3 mb-20 gap-5">
        {data?.data?.slice(0, 6).map((keyboard: Keyboard) => (
          <Cards keyboard={keyboard} key={keyboard._id}></Cards>
        ))}
      </div>
    </Container>
  );
};

export default FeatureProduct;
