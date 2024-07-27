import Footer from "../home/footer/Footer";
import Navbar from "../home/navbar/Navbar";
import Cards from "../../utils/card/Cards";
import Container from "../../utils/container/Container";
import { useGetProductsQuery } from "../../redux/api/baseApi";
import { FaSearch } from "react-icons/fa";
import { useRef, useState } from "react";

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

const AllProducts = () => {
  const searchRef = useRef();
  const [filterPrice, setFilterPrice] = useState("");
  const [sort, setSort] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const filters = {
    searchTerm,
    sort,
    priceRange: filterPrice,
  };
  const { data, isLoading } = useGetProductsQuery(filters);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#4A249D]"></div>
      </div>
    );
  }

  console.log(data);
  const handleSearch = () => {
    const searchResult = searchRef.current.value;
    setSearchTerm(searchResult);
  };
  const handlePriceRange = (e) => {
    e.preventDefault();
    const priceRange = e.target.value;
    console.log(priceRange);

    setFilterPrice(priceRange);
  };
  const handleSort = (e) => {
    e.preventDefault();
    const sortData = e.target.value;
    setSort(sortData);
  };
  return (
    <>
      <Navbar />
      <Container>
        <div className="">
          <div className="space-y-7">
            <input
              ref={searchRef}
              className="input w-[450px] input-bordered join-item"
              placeholder="Product name"
            />
            <button
              onClick={handleSearch}
              className="btn join-item rounded-r-full bg-[#FA4F09]"
            >
              <FaSearch></FaSearch>
            </button>

            <div className="grid grid-cols-3 gap-5">
              <select
                onChange={handleSort}
                name="price"
                className="select select-bordered w-full "
              >
                <option disabled selected>
                  Sort By Price
                </option>
                <option value={"priceHighToLow"}>High To Low</option>
                <option value={"priceLowToHigh"}>Low To High</option>
              </select>
              <select
                onChange={handlePriceRange}
                name="price"
                className="select select-bordered w-full "
              >
                <option disabled selected>
                  Filter by Price
                </option>
                <option value={"0-100"}>$0 - $100</option>
                <option value={"100-500"}>$100 - $500</option>
                <option value={"500-1000"}>$500 - $1000</option>
                <option value={"1000-100000000"}>More Than $1000</option>
              </select>
              <button
                className="btn-main w-full"
                onClick={() => {
                  setFilterPrice("");
                  setSort("");
                  setSearchTerm("");
                }}
              >
                <span>Reset your query</span>
              </button>
            </div>
          </div>

          <div className="divider mt-14 mb-0">
            <p className="title-icon mb-4 ml-2 mr-2"></p>
          </div>

          <div className="grid grid-cols-3 mb-20 mt-20 gap-5 ">
            {data?.data?.map((keyboard: Keyboard) => (
              <Cards keyboard={keyboard} key={keyboard._id}></Cards>
            ))}
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default AllProducts;
