import BasicButton from "../../general/buttons/BasicButton";
const salesReport = [
  { label: "10K+", subs: "Sales" },
  { label: "4.6/5", subs: "Rating" },
  { label: "Power Elite", subs: "Author" },
];

function PurchaseBanner() {
  return (
    <div className="bg-gray-100 mx-4 sm:mx-0 sm:w-1/2 sm:mt-6">
      <div className="mx-4 pt-4 sm:pt-0 sm:mx-auto sm:w-1/2 text-2xl text-gray-600">
        Clinical Transform is a versatile healthcare application that seamlessly
        integrates with various EHR systems, such as EPIC, using the SMART on
        FHIR framework.
      </div>
      <div className="flex mx-auto sm:w-1/2 mt-12 gap-6">
        <BasicButton
          label="EXPLORE PRODUCTS"
          customStyle="text-white bg-gray-800 w-44"
        />
        <BasicButton
          label="PURCHASE PLAN"
          customStyle="text-white bg-sky-400 w-44"
        />
      </div>
      <div className="mx-auto sm:w-1/2 flex justify-between mt-12 sm:mt-28">
        {salesReport.map((item) => (
          <div>
            <h2 className="text-2xl text-sky-400">{item.label}</h2>
            <p className="text-lg text-gray-600 font-medium">{item.subs}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default PurchaseBanner;
