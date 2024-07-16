import { useEffect, useState } from "react";
import Footer from "../home/footer/Footer";
import Navbar from "../home/navbar/Navbar";
import Cards from "../../utils/card/Cards";
import Container from "../../utils/container/Container";

interface Keyboard {
  id: number;
  image: string;
  title: string;
  brand: string;
  availableQuantity: number;
  price: number;
  rating: number;
  seeDetails: string;
}

const AllProducts = () => {
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
    <>
      <Navbar />
      <Container>
        <div>
          <div className="grid grid-cols-3 mb-20 mt-20 gap-5">
            {data.map((keyboard) => (
              <Cards keyboard={keyboard} key={keyboard.id}></Cards>
            ))}
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default AllProducts;
