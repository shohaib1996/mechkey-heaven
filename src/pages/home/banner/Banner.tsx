import Container from "../../../utils/container/Container";
import BannerImages from "./bannerImage/BannerImages";
import Slider from "./slider/Slider";

const Banner = () => {
  return (
    <Container>
      <div className="flex gap-6 justify-center items-center mt-32">
        <div className="flex-1">
          <BannerImages />
        </div>
        <div className="flex-1 ">
          <Slider />
        </div>
      </div>
    </Container>
  );
};

export default Banner;
