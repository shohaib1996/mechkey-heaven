import Container from "../../utils/container/Container";
import Footer from "../home/footer/Footer";
import Navbar from "../home/navbar/Navbar";
import OrderConfirmed from "../../../public/order_confirmed.json";
import Lottie from "react-lottie";

const ConfirmedOrder = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: OrderConfirmed,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <Navbar></Navbar>
      <Container>
        <div className="min-h-screen flex items-center justify-center">
          <Lottie options={defaultOptions} height={400} width={400}></Lottie>
        </div>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default ConfirmedOrder;
