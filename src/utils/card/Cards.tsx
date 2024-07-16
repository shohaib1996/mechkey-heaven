import { Link } from "react-router-dom";

interface Keyboard {
  id: number;
  image: string;
  title: string;
  brand: string;
  availableQuantity: number;
  price: number;
  rating: number;
}

const Cards = ({ keyboard }: { keyboard: Keyboard }) => {
  return (
    <div className="border-2 rounded-lg p-5">
      <img className="rounded-md" src={keyboard.image} alt={keyboard.title} />
      <h2 className="font-bold text-xl">{keyboard.title}</h2>
      <p>Brand: {keyboard.brand}</p>
      <p>Available Quantity: {keyboard.availableQuantity}</p>
      <p className="text-xl text-[#FA4F09] font-bold">{keyboard.price}$</p>
      <p className="mb-3">Rating: {keyboard.rating} stars</p>
      <hr className="border-2" />
      <div className="mt-3 w-full">
        <Link to={`/products/${keyboard.id}`}>
          <button className="btn-main w-full">
            <span>See details</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cards;
