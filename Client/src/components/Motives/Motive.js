import React, { setState } from "react";
import { useDispatch } from "react-redux";
import { deleteMotive } from "../../actions/motives";

const Motive = ({ motive, motives }) => {
  const dispatch = useDispatch();

  const deleteMotiveHandler = () => {
    console.log(motive._id);
    dispatch(deleteMotive(motive._id));
  };

  return (
    <div>
      <h2>User</h2>
      <h4>date</h4>
      <h3>{motive.message}</h3>
      <button>Like</button>
      <button onClick={deleteMotiveHandler}>Delete</button>
    </div>
  );
};

export default Motive;
