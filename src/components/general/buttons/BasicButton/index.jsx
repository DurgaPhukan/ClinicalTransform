function BasicButton(props) {
  return (
    <button className={`py-4 px-3 font-normal text-sm ${props.customStyle}`}>
      {props.label}
    </button>
  );
}
export default BasicButton;
