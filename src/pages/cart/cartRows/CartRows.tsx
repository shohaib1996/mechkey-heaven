import { FiPlusCircle } from "react-icons/fi";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { RxCrossCircled } from "react-icons/rx";
import { useAppDispatch } from "../../../redux/hooks/hook";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../../../redux/features/productSlice";

interface Keyboard {
  _id: string;
  image: string;
  title: string;
  brand: string;
  cartQuantity: number;
  price: number;
  rating: number;
  description: string;
}

const CartRows = ({ keyboard }: { keyboard: Keyboard }) => {
  const { image, title, cartQuantity, price, _id } = keyboard;

  const dispatch = useAppDispatch();

  const handleDelete = (cartId: string) => {
    swal({
      title: "Remove from cart",
      icon: "warning",
      // @ts-expect-error: Unreachable code error
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(removeFromCart(cartId));
        swal("Product has been deleted from cart!", {
          icon: "success",
        });
      } else {
        swal("Product is safe!");
      }
    });
  };

  const handleIncrease = (cartId: string) => {
    dispatch(incrementQuantity(cartId));
  };

  const handleDecrease = (cartId: string) => {
    dispatch(decrementQuantity(cartId));
  };

  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={image} alt={title} />
            </div>
          </div>
          <div>
            <div className="font-bold">{title}</div>
          </div>
        </div>
      </td>
      <td>${price * cartQuantity}</td>
      <td>{cartQuantity}</td>
      <th className="flex items-center justify-center gap-2">
        <div className="border-2 rounded-md flex items-center justify-center">
          <button
            onClick={() => handleIncrease(_id)}
            className="btn btn-ghost text-2xl font-bold btn-md mr-0"
          >
            <FiPlusCircle></FiPlusCircle>
          </button>
          <div className="divider lg:divider-horizontal lg:ml-0 lg:mr-0 p-0 m-0 gap-0 w-[10px]"></div>
          <button
            onClick={() => handleDecrease(_id)}
            className="btn btn-ghost text-2xl font-bold btn-md"
          >
            <AiOutlineMinusCircle></AiOutlineMinusCircle>
          </button>
        </div>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-ghost text-2xl text-red-500 hover:bg-red-500 hover:text-white font-bold btn-md"
        >
          <RxCrossCircled></RxCrossCircled>
        </button>
      </th>
    </tr>
  );
};

export default CartRows;
