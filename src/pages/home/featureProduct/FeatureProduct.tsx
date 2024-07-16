import { useEffect, useState } from "react";
import Container from "../../../utils/container/Container";
import "../../../style/btn.css";
import "../../../style/advertisement.css";
import { Link } from "react-router-dom";
import Cards from "../../../utils/card/Cards";

// Define the interface for the keyboard data
interface Keyboard {
  id: number;
  image: string;
  title: string;
  brand: string;
  availableQuantity: number;
  price: number;
  rating: number;
  seeDetails: string;
}

const FeatureProduct = () => {
  // Use the interface to type the state
  const [data, setData] = useState<Keyboard[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("../../../../public/data.json");
      const data: Keyboard[] = await res.json();
      setData(data);
    };

    fetchData();
  }, []);

  console.log(data);

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
        {data?.map((keyboard) => (
          <Cards keyboard={keyboard} key={keyboard.id}></Cards>
        ))}
      </div>
    </Container>
  );
};

export default FeatureProduct;
