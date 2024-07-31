/* eslint-disable @typescript-eslint/no-explicit-any */
import { useUpdateSingleProductMutation } from "../../../redux/api/baseApi";
import swal from "sweetalert";

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

const UpdateModal = ({
  product,
  modal,
  setModal,
}: {
  product: Keyboard;
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  //   console.log(product);

  const [updateProduct] = useUpdateSingleProductMutation();

  const {
    _id,
    title: ttl,
    image: img,
    brand: brandy,
    quantity: quanti,
    price: pri,
    rating: rati,
    description: desc,
  } = product;

  //   console.log(data);

  const onSubmit = async (e: any) => {
    e.preventDefault();

    const form = e.target;
    const title = form.name.value;
    const image = form.photo.value;
    const brand = form.brand.value;
    const quantity = form.quantity.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const description = form.description.value;

    const quan = parseFloat(quantity);
    const priceValue = parseFloat(price);
    const rate = parseInt(rating);

    console.log(price);

    const data = {
      title: title ? title : ttl,
      image: image ? image : img,
      brand: brand ? brand : brandy,
      quantity: quan !== undefined && !isNaN(quan) ? quan : quanti,
      price: priceValue ? priceValue : pri,
      rating: rate ? rate : rati,
      description: description ? description : desc,
    };
    const options = {
      id: _id,
      data,
    };

    // updateProduct(options);

    try {
      const response = await updateProduct(options).unwrap();

      console.log(response);

      if (response?.success === true) {
        swal({
          title: "Product Updated",
          text: "Successfull",
          icon: "success",
          // @ts-expect-error: Unreachable code error
          button: "Done",
        });
        setModal(false);
      }
    } catch (error) {
      console.error("Failed to update product", error);
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
              defaultValue={ttl}
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
              defaultValue={img}
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
              defaultValue={brandy}
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
              defaultValue={quanti}
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
              defaultValue={pri}
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
              defaultValue={rati}
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
              defaultValue={desc}
              className="input input-bordered w-full max-w-xs"
              name="description"
            />
          </div>
          <button type="submit" className="btn-main w-full">
            <span>Update</span>
          </button>
        </form>
      </div>
    </dialog>
  );
};

export default UpdateModal;
