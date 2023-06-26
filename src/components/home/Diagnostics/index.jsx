import Container from "../../general/Container";
import healthcarecenter from "../../../assets/healthcarecenter.jpg";
import immediatecare from "../../../assets/immediatecare.jpg";
import diagnosticcenter from "../../../assets/diagnosticcenter.jpg";

const diagnosticProcess = [
  {
    img: healthcarecenter,
    title: "HEALTHCARE CENTER",
    des: "Our goal is to provide a patient-centered medical home for all patients",
  },
  {
    img: immediatecare,
    title: "IMMEDIATE CARE",
    des: "Effective and affordable treatment for non-life threatening illnesses",
  },
  {
    img: diagnosticcenter,
    title: "DIAGNOSTIC CENTER",
    des: "Offers a wide array of reliable lab and diagnostic imaging services",
  },
];

function Diagnostics() {
  return (
    <div className="bg-white pb-6">
      <Container>
        <div className="mx-4 sm:mx-0 sm:flex pt-20 pb-10">
          <div className=" sm:w-1/4 flex gap-10">
            <h2 className="text-3xl">
              We Value Your Family's Health and Your Time
            </h2>
          </div>
          <div className="sm:w-9/12">
            <p className="font-light text-gray-500">
              Welcome to Clinical Transform a full-service diagnostic center and
              medical care clinic located on the north side of Chicago in the
              historic neighborhood. We provide fast effective and affordable
              treatment for non-life threatening illnesses and injuries that
              need attention right away by certified specialists.
            </p>
          </div>
        </div>
        <div className="md:flex bg-gray-100 sm:mb-20">
          {diagnosticProcess.map((item) => (
            <div className="">
              <div>
                <img
                  className="w-full object-cover h-96"
                  src={item.img}
                  alt=""
                />
              </div>
              <div className="mx-4 sm:px-10 py-6">
                <h3 className="font-medium text-lg pb-4">{item.title}</h3>
                <p className="font-light text-gray-600">{item.des}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
export default Diagnostics;
