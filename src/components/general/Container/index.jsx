function Container(props) {
  return (
    <>
      <div className={`flex-wrap container mx-auto ${props.customStyle}`}>
        {props.children}
      </div>
    </>
  );
}
export default Container;
