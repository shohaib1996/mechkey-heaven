import Container from "../../../utils/container/Container";
import CustomizeContents from "./customizeContent/CustomizeContents";

const Customize = () => {
  return (
    <Container>
      <div className="mt-20 mb-20 flex justify-center items-center">
        <span className="title-icon"></span>
        <h2 className="mx-10 lg:mx-20 text-xl lg:text-4xl font-extrabold mt-2">
          Customizable Options
        </h2>
        <span className="title-icon"></span>
      </div>
      <CustomizeContents></CustomizeContents>
    </Container>
  );
};
export default Customize;
