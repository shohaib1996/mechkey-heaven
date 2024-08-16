import Container from "../../../utils/container/Container";
import WhyChooseMechanicalContent from "./whychooseMechanicalContent/WhyChooseMechanicalContent";

const WhyChoseMechanical = () => {
  return (
    <Container>
      <div className="mt-20 mb-20 flex justify-center items-center">
        <span className="title-icon"></span>
        <h2 className="mx-10 lg:mx-20 text-xl text-center lg:text-4xl font-extrabold mt-2">
          Why Choose <br />
          Mechanical Keyboard
        </h2>
        <span className="title-icon"></span>
      </div>
      <WhyChooseMechanicalContent></WhyChooseMechanicalContent>
    </Container>
  );
};

export default WhyChoseMechanical;
