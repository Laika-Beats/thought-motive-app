import * as api from "../api";

export const fetchMotives = () => async (dispatch) => {
  try {
    const { data } = await api.fetchMotives;
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error);
  }
};
