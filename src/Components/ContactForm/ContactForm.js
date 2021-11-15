import s from "./ContactForm.module.css";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { connect } from "react-redux";
import actions from "../../redux/actions";
import ContactList from "../ContactList/ContactList";

function ContactForm({ contacts }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const inputChange = (evt) => {
    switch (evt.target.name) {
      case "name":
        setName(evt.target.value);
        break;

      case "number":
        setNumber(evt.target.value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (
      contacts.find(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return alert("This contact has already been added to the list");
    }

    resetForm();
  };

  const resetForm = () => {
    setName("");
    setNumber("");
  };

  return (
    <div className={s.formWrapper}>
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.label}>
          Name
          <input
            className={s.input}
            value={name}
            type="text"
            name="name"
            placeholder="Name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            onChange={inputChange}
          />
        </label>

        <label className={s.label}>
          Number
          <input
            className={s.input}
            type="tel"
            value={number}
            name="number"
            placeholder="Number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            onChange={inputChange}
          />
        </label>
        <button className={s.button}>Add contact</button>
      </form>
    </div>
  );
}

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,

  nameId: PropTypes.number,
  numberId: PropTypes.number,

  handleSubmit: PropTypes.func,
  formSubmit: PropTypes.func,
  inputChange: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
  };
};

const mapDispatchToProps = (dispatch) => ({
  formSubmit: (contact) => dispatch(actions.addContact(contact)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
