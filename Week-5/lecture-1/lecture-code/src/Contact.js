export const actions = {
  SELECT: "SELECT",
  DESELECT: "DESELECT"
};

const Contact = function(props) {

  const onClick = () => {
    if (props.isSelected) {
      props.dispatch({ type: actions.DESELECT, payload: props.contact });
      return;
    }

    props.dispatch({ type: actions.SELECT, payload: props.contact });
  };

  return (
    <li>
      <input type="checkbox" onClick={onClick} />
      {props.contact.name}
    </li>
  );
};

export default Contact;
