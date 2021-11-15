import s from "./Filter.module.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import actions from "../../redux/actions";

function Filter({ filter, onFilterChange }) {
  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        name="name"
        value={filter}
        onChange={onFilterChange}
      />
    </label>
  );
}

Filter.propTypes = {
  onFilterChange: PropTypes.func,
  filter: PropTypes.string,
};
const mapStateToProps = (state) => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(actions.filterChange(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
