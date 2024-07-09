import Advertisement from "./advertisement/Advertisement";
import Banner from "./banner/Banner";
import FeatureProduct from "./featureProduct/FeatureProduct";
import Navbar from "./navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Advertisement></Advertisement>
      <FeatureProduct></FeatureProduct>
    </div>
  );
};

export default Home;
