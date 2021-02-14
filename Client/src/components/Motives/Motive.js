import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteMotive, fetchMotives } from "../../actions/motives";

const Motive = ({ motive, setCurrentId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMotives());
  }, [setCurrentId]);

  // BUTTON HANDLERS
  const deleteMotiveHandler = async () => {
    await dispatch(deleteMotive(motive._id));
    await dispatch(fetchMotives());
  };
  const editHandler = () => {
    const editMotive = () => {
      setCurrentId(motive._id);
    };
    editMotive();
  };

  return (
    <div>
      <h2>User</h2>
      <h4>date</h4>
      <h3>{motive.message}</h3>
      <button onClick={editHandler}>Edit</button>
      <button onClick={deleteMotiveHandler}>Delete</button>
    </div>
  );
};

export default Motive;
