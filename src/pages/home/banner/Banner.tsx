import Container from "../../../utils/container/Container";
import BannerImages from "./bannerImage/BannerImages";
import Slider from "./slider/Slider";

const Banner = () => {
  return (
    <Container>
      <div className="flex gap-6 justify-center items-center mt-5 lg:mt-32 lg:flex-row flex-col lg:p-0 p-4">
        <div className="flex-1">
          <BannerImages />
        </div>
        <div className="flex-1 p-10 lg:p-0">
          <Slider />
        </div>
      </div>
    </Container>
  );
};

export default Banner;
