import * as api from "../api";

// FETCH
export const fetchMotives = () => async (dispatch) => {
  try {
    const { data } = await api.fetchMotives;
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error);
  }
};

// CREATE
export const createMotive = (motive) => async (dispatch) => {
  try {
    const { data } = await api.createMotive(motive);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

// DELETE
export const deleteMotive = (id) => async (dispatch) => {
  try {
    const { data } = await api.deleteMotive(id);
    dispatch({ type: "DELETE", payload: id });
  } catch (error) {
    console.log(error);
  }
};

// UPDATE
export const updateMotive = (id, motive) => async (dispatch) => {
  try {
    const { data } = await api.updateMotive(id, motive);
    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};
