import s from "./ContactList.module.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import actions from "../../redux/actions";

const ContactList = ({ getContacts, onDeleteContact }) => {
  return (
    <div className={s.listWrapper}>
      <ul className={s.list}>
        {getContacts.map(({ name, number, id }) => {
          return (
            <li className={s.item} key={id}>
              <p className={s.text}>{name}:</p>
              <p className={s.text}>{number}</p>
              <button
                className={s.button}
                type="button"
                onClick={() => onDeleteContact(id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  getContacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.string,
      id: PropTypes.string,
    })
  ),

  deleteContact: PropTypes.func,
};

const handleContacts = (allContacts, filter) => {
  const onContactsFilter = filter.toLowerCase();

  return allContacts.filter(({ name }) =>
    name.toLowerCase().includes(onContactsFilter)
  );
};

const mapStateToProps = (state) => ({
  getContacts: handleContacts(state.contacts.items, state.contacts.filter),
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteContact: (id) => dispatch(actions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
