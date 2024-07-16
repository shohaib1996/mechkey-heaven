import Advertisement from "./advertisement/Advertisement";
import Banner from "./banner/Banner";
import Brand from "./brand/Brand";
import FeatureProduct from "./featureProduct/FeatureProduct";
import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";
import Testimonial from "./testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Advertisement></Advertisement>
      <FeatureProduct></FeatureProduct>
      <Brand></Brand>
      <Testimonial></Testimonial>
      <Footer></Footer>
    </div>
  );
};

export default Home;
