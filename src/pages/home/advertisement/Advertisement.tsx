import "../../../style/advertisement.css";
import Container from "../../../utils/container/Container";
import AdvertisementContent from "./advertisementContent/AdvertisementContent";

const Advertisement = () => {
  return (
    <Container>
      <div className="lg:mt-48 mt-5 mb-20 flex justify-center items-center">
        <span className="title-icon"></span>
        <h2 className="lg:mx-20 mx-10 text-xl lg:text-4xl font-extrabold mt-2">
          Why we are different
        </h2>
        <span className="title-icon"></span>
      </div>
      <AdvertisementContent />
    </Container>
  );
};

export default Advertisement;
