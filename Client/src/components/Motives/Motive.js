import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteMotive, fetchMotives } from "../../actions/motives";
import Moment from "moment";

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
    <div className="motive-container">
      <h2 className="user-name">User</h2>
      <div className="date-edit">
        <h6>{Moment(motive.createdAt).fromNow()}</h6>
        <button onClick={editHandler}>Edit</button>
      </div>
      <h3 className="motive-message">{motive.message}</h3>
      <div className="like-delete">
        <button>Like</button>
        <button onClick={deleteMotiveHandler}>Delete</button>
      </div>
    </div>
  );
};

export default Motive;
