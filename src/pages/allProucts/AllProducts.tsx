import Footer from "../home/footer/Footer";
import Navbar from "../home/navbar/Navbar";
import Cards from "../../utils/card/Cards";
import Container from "../../utils/container/Container";
import { useGetProductsQuery } from "../../redux/api/baseApi";
import { FaSearch } from "react-icons/fa";
import { useRef, useState } from "react";
import useDebounce from "../../redux/hooks/useDebounce";

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
  const searchRef = useRef<HTMLInputElement>(null);
  const [filterPrice, setFilterPrice] = useState<string>("");
  const [sort, setSort] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);
  const filters = {
    searchTerm: debouncedSearchTerm,
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

  // console.log(data?.data);
  const handleSearch = () => {
    const searchResult = searchRef.current!.value;
    setSearchTerm(searchResult);
  };
  const handlePriceRange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    const priceRange = e.target.value;
    console.log(priceRange);

    setFilterPrice(priceRange);
  };
  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    const sortData = e.target.value;
    setSort(sortData);
  };
  return (
    <>
      <Navbar />
      <Container>
        <div className="">
          <div className="">
            <div className="flex justify-center lg:justify-start items-center p-5 lg:p-0 mt-5 lg:mt-20">
              <input
                ref={searchRef}
                className="input w-[450px] input-bordered join-item"
                placeholder="Product name"
              />
              <button
                onClick={handleSearch}
                className="btn join-item rounded-r-full bg-[#FA4F09]"
              >
                <FaSearch className="text-white"></FaSearch>
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 p-5 lg:p-0 mt-0 lg:mt-12">
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

          <div className="grid grid-cols-1 lg:grid-cols-3 mb-20 mt-20 gap-5 p-5 lg:p-0">
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
