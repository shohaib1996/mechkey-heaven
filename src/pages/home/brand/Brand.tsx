import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import "../../../style/advertisement.css";

interface Brand {
  title: string;
  img: string;
}

const Brand = () => {
  const [data, setData] = useState<Brand[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/brand.json");
      const data: Brand[] = await res.json();
      setData(data);
    };

    fetchData();
  }, []);
  console.log(data);

  return (
    <div>
      <div className="mt-24 lg:mt-48 mb-20 flex justify-center items-center">
        <span className="title-icon"></span>
        <h2 className="mx-10 lg:mx-20 text-xl lg:text-4xl font-extrabold mt-2">
          Our Top Brand
        </h2>
        <span className="title-icon"></span>
      </div>
      <Marquee>
        {data?.map((brand, index) => (
          <div key={index} className="m-5 border-2 p-2 rounded-md">
            <div>
              <img className="w-[350px] h-[200px]" src={brand.img} alt="" />
            </div>
            <p className="text-center text-2xl font-bold mt-2">{brand.title}</p>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Brand;
