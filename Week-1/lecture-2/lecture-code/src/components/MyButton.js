
const MyButton = function(props) {

  const onButtonClicked = function(event) {
    props.onClick("hello", props.label);
  };

  return (
    <>
      <div>{props.children}</div>
      <button
        type="button"
        onClick={onButtonClicked}>{props.label}
      </button>
    </>
  );
};

export default MyButton;