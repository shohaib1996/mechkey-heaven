import { useState } from "react";
import { FaPen } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import UpdateModal from "../updateModal/UpdateModal";
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

const TableRows = ({ data }: { data: Keyboard }) => {
  //   console.log(data);
  const [modal, setModal] = useState<boolean>(false);
  const { image, title, brand, price } = data;

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
      <td>{brand}</td>
      <td>${price}</td>
      <th>
        <button onClick={() => setModal(true)} className="btn btn-ghost">
          <FaPen className="text-3xl text-[#FA4F09]"></FaPen>
        </button>
        <button className="btn btn-ghost">
          <FaTrash className="text-3xl text-red-600"></FaTrash>
        </button>
      </th>

      <UpdateModal
        product={data}
        modal={modal}
        setModal={setModal}
      ></UpdateModal>
    </tr>
  );
};

export default TableRows;
