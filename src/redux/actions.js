import types from "./types";
import { v4 as uuidv4 } from "uuid";

const addContact = (name, number) => ({
  type: types.ADD,
  payload: { id: uuidv4(), name, number },
});

const deleteContact = (id) => ({
  type: types.DELETE,
  payload: id,
});

const filterChange = (value) => ({
  type: types.FILTER,
  payload: value,
});

const actions = { addContact, deleteContact, filterChange };

export default actions;
