import PurchaseBanner from "../PurchaseBanner";
import healthLayout from "../../../assets/healthLayout.png";
import WhyClinical from "../WhyClinical";
import Emergency from "../Emergency";
import Container from "../../general/Container";
import Footer from "../../navigation/Footer";
import Diagnostics from "../Diagnostics";
import Statistics from "../Statistics";
import clinical from "../../../assets/clinical.jpg";

function HomeLayout() {
  return (
    <>
      <div className="bg-gray-100">
        <img
          style={{ zIndex: "-1" }}
          src={clinical}
          alt=""
          className="fixed object-cover w-full"
        />
      </div>
      <div className="sm:flex justify-between items-center bg-gray-100">
        <div className="sm:order-last mt-6 sm:mt-0">
          <img className="w-full" src={healthLayout} alt="Health Layout" />
        </div>
        <PurchaseBanner />
      </div>
      <WhyClinical />
      <div className="bg-gray-100">
        <Container>
          <Emergency />
        </Container>
      </div>
      <Statistics />
      <Diagnostics />
      <hr className="sm:hidden"></hr>
      <Footer />
    </>
  );
}
export default HomeLayout;
