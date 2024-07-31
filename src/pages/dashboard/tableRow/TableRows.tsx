import { useState } from "react";
import { FaPen } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import UpdateModal from "../updateModal/UpdateModal";
import { useDeleteProductMutation } from "../../../redux/api/baseApi";
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
  const { image, title, brand, price, _id } = data;

  const [deleteProduct] = useDeleteProductMutation();

  function handleDelete(deleteId: string) {
    console.log(deleteId);
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this product data!",
      icon: "warning",
      // @ts-expect-error: Unreachable code error
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        deleteProduct(deleteId);
        swal("Product has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Product is safe!");
      }
    });
  }

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
        <button onClick={() => handleDelete(_id)} className="btn btn-ghost">
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
