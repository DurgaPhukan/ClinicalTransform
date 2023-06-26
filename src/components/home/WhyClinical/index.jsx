import Container from "../../general/Container";
import whyclinical1 from "../../../assets/whyclinical1.jpg";
import whyclinical2 from "../../../assets/whyclinical2.jpg";

const achievements = [
  "Clinical Transform allows users, including doctors, clinicians, and administrators, to launch it directly from the EHR system or through a web browser using their HyperSpace credentials",
  "Users can select a patient to establish the context and access specific healthcare protocols, displayed as interactive flowcharts.",
  "We provide fast, effective and affordable immediate solutions for seamless integration with various EHR systems, such as EPIC, using the SMART on FHIR framework.",
];

function WhyClinical() {
  return (
    <div className="bg-white">
      <Container>
        <div className="bg-white pt-20 pb-20 sm:flex justify-center gap-20">
          <div className="relative sm:w-1/2 flex">
            <div className="z-10 sm:pt-12 sm:absolute h-4/5 right-56 w-1/2">
              <img src={whyclinical1} alt="whyClinical1" />
            </div>
            <div className="sm:absolute right-0  h-4/5 w-1/2">
              <img src={whyclinical2} alt="whyClinical1" />
            </div>
          </div>
          <div className="mx-4 sm:mx-0 mt-8 sm:mt-0 sm:w-1/2">
            <h2 className="mb-4 pb-2 text-gray-600 font-medium text-lg">
              <span className="border-b-2 border-sky-400">Welco</span>me to
              Clinical Transform
            </h2>
            <p className="text-3xl py-4">
              Clinical Transform holds the privilage of being first choice of
              versatile healthcare applications.
            </p>
            <p className="font-light text-gray-600 my-6 text-lg">
              Since it can be deployed in hospitals or clinics utilizing
              different EHR vendors, extending its accessibility to a wider
              range of healthcare providers.
            </p>
            <div>
              {achievements.map((item) => (
                <div className="flex gap-4 mb-3">
                  <div className="text-sky-400 p-1 h-8 rounded-full border-2 border-gray-200 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <p className=" font-light text-gray-600">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
export default WhyClinical;
