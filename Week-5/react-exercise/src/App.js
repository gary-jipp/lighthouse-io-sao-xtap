import "App.css";
import { useReducer } from "react";
import Contact from "Contact";
import contactReducer from "reducers/contactReducer";

export default function App() {
  const [selectedContacts, dispatch] = useReducer(contactReducer, []);

  const contacts = [
    { id: 1, name: "Alice" },
    { id: 2, name: "John" },
    { id: 3, name: "Mark" },
    { id: 4, name: "Janice" },
    { id: 5, name: "Harvey" }
  ];

  const invited = contacts.map((contact) => {
    const isSelected = Boolean(selectedContacts.find(c => c.id === contact.id));
    return (
      <Contact
        key={contact.id}
        isSelected={isSelected}
        contact={contact}
        dispatch={dispatch}
      />
    );
  });

  return (
    <div class="App">

      <h1> Party List Invites</h1>
      <ul>
        {invited}
      </ul>
      <h3>
        These friends have been invited to the party:{" "}
        {selectedContacts.map((contact) => ` ${contact.name}, `)}
      </h3>

    </div>
  );
}
