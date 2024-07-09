import { useEffect, useState } from "react";
import Container from "../../../utils/container/Container";
import "../../../style/btn.css";
import "../../../style/advertisement.css";

// Define the interface for the keyboard data
interface Keyboard {
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
          <button className="btn-main">
            <span>See More</span>
          </button>
        </div>
      </div>
      <hr className="mb-14 border-1" />
      <div className="grid grid-cols-3 mb-20 gap-5">
        {data?.map((keyboard, index) => (
          <div key={index} className="border-2 rounded-lg p-5">
            <img
              className="rounded-md"
              src={keyboard.image}
              alt={keyboard.title}
            />
            <h2 className="font-bold text-xl">{keyboard.title}</h2>
            <p>Brand: {keyboard.brand}</p>
            <p>Available Quantity: {keyboard.availableQuantity}</p>
            <p className="text-xl text-[#FA4F09] font-bold">
              {keyboard.price}$
            </p>
            <p className="mb-3">Rating: {keyboard.rating} stars</p>
            <hr className="border-2" />
            <div className="mt-3 w-full">
              <button className="btn-main w-full">
                <span>See details</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default FeatureProduct;
