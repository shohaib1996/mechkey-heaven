import Advertisement from "./advertisement/Advertisement";
import Banner from "./banner/Banner";
import Brand from "./brand/Brand";
import Customize from "./customize/Customize";
import FeatureProduct from "./featureProduct/FeatureProduct";
import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";
import Testimonial from "./testimonial/Testimonial";
import WhyChoseMechanical from "./whyChoseMechanical/WhyChoseMechanical";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Advertisement></Advertisement>
      <FeatureProduct></FeatureProduct>
      <Brand></Brand>
      <Testimonial></Testimonial>
      <WhyChoseMechanical></WhyChoseMechanical>
      <Customize></Customize>
      <Footer></Footer>
    </div>
  );
};

export default Home;
