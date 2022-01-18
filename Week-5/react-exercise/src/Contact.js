const Contact = function(props) {
  const SELECT = "SELECT";
  const DESELECT = "DESELECT";

  const onClick = function() {
    if (props.isSelected) {
      props.dispatch({ type: DESELECT, payload: props.contact });
      return;
    }

    props.dispatch({ type: SELECT, payload: props.contact });
  };

  return (
    <li>
      <input type="checkbox" onClick={onClick} />
      {props.contact.name}
    </li>
  );
};

export default Contact;
