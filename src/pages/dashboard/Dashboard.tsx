import { useState } from "react";
import { useGetProductsQuery } from "../../redux/api/baseApi";
import Container from "../../utils/container/Container";
import Footer from "../home/footer/Footer";
import Navbar from "../home/navbar/Navbar";
import AddProduct from "./addProduct/AddProduct";
import TableRows from "./tableRow/TableRows";

const Dashboard = () => {
  const [modal, setModal] = useState<boolean>(false);
  const { data, isLoading } = useGetProductsQuery(undefined);

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

  if (isLoading) {
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#4A249D]"></div>
    </div>;
  }
  //   console.log(data?.data);

  return (
    <div>
      <Navbar />
      <Container>
        <div className="flex justify-end">
          <button onClick={() => setModal(true)} className="btn-main my-5">
            <span>Add Product</span>
          </button>
        </div>
        <div className="overflow-x-auto mt-5 mb-20 rounded-[10px] border-2">
          <table className="table ">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th className="text-center">Brand</th>
                <th className="text-center">Price</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {data?.data?.map((keyboard: Keyboard) => (
                <TableRows data={keyboard} key={keyboard._id}></TableRows>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
      <Footer />

      <AddProduct modal={modal} setModal={setModal}></AddProduct>
    </div>
  );
};

export default Dashboard;
