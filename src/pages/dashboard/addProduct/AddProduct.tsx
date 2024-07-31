/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAddProductMutation } from "../../../redux/api/baseApi";

const AddProduct = ({
  modal,
  setModal,
}: {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [addProduct] = useAddProductMutation();
  const onSubmit = async (e: any) => {
    e.preventDefault();

    const form = e.target;
    const title = form.name.value;
    const image = form.photo.value;
    const brand = form.brand.value;
    const quantity = parseFloat(form.quantity.value);
    const price = parseFloat(form.price.value);
    const rating = parseFloat(form.rating.value);
    const description = form.description.value;

    const data = {
      title,
      image,
      brand,
      quantity,
      price,
      rating,
      description,
    };

    try {
      const response = await addProduct(data).unwrap();

      console.log(response);

      if (response?.success === true) {
        swal({
          title: "Product added!",
          text: "Successfull",
          icon: "success",
          // @ts-expect-error: Unreachable code error
          button: "Done",
        });
        setModal(false);
      }
    } catch (error) {
      console.error("Failed to add product", error);
    }
  };
  return (
    <dialog id="my_modal_3" className={`modal ${modal ? "modal-open" : ""}`}>
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button
            onClick={() => setModal(false)}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
        </form>
        <form onSubmit={onSubmit} action="" className="space-y-4">
          <div>
            <label className="mr-5" htmlFor="">
              Name:
            </label>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
              name="name"
            />
          </div>
          <div>
            <label className="mr-5" htmlFor="">
              Photo:
            </label>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
              name="photo"
            />
          </div>
          <div>
            <label className="mr-5" htmlFor="">
              brand:
            </label>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
              name="brand"
            />
          </div>
          <div>
            <label className="mr-5" htmlFor="">
              Quantity:
            </label>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
              name="quantity"
            />
          </div>
          <div>
            <label className="mr-5" htmlFor="">
              Price:
            </label>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
              name="price"
            />
          </div>
          <div>
            <label className="mr-5" htmlFor="">
              Rating:
            </label>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
              name="rating"
            />
          </div>
          <div>
            <label className="mr-5" htmlFor="">
              Description:
            </label>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
              name="description"
            />
          </div>
          <button type="submit" className="btn-main w-full">
            <span>Add Product</span>
          </button>
        </form>
      </div>
    </dialog>
  );
};

export default AddProduct;
