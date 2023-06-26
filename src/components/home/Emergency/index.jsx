import BasicButton from "../../general/buttons/BasicButton";

function Emergency() {
  return (
    <div className="mx-4 flex sm:mx-auto justify-center py-12 gap-8 items-center">
      <div>
        <h2 className="text-2xl text-sky-800">
          In case of emergency call (510) 210-5225
        </h2>
      </div>
      <div>
        <BasicButton
          label="OR SEND US A MESSAGE"
          customStyle="bg-sky-400 text-white "
        />
      </div>
    </div>
  );
}
export default Emergency;
