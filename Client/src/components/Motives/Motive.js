import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteMotive, fetchMotives } from "../../actions/motives";
import Moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faHeart, faEdit } from "@fortawesome/free-solid-svg-icons";

const Motive = ({ motive, setCurrentId }) => {
  const dispatch = useDispatch();
  const user = "Laika Beats";

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
      <h2 className="user-name">{user}</h2>
      <div className="date-edit">
        <h6>{Moment(motive.createdAt).fromNow()}</h6>
        <button className="btn" onClick={editHandler}>
          <FontAwesomeIcon icon={faEdit} />
        </button>
      </div>
      <h3 className="motive-message">{motive.message}</h3>
      <div className="like-delete">
        <button className="btn">
          <FontAwesomeIcon className="icon" icon={faHeart} /> 0
        </button>
        <button className="btn" onClick={deleteMotiveHandler}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </div>
    </div>
  );
};

export default Motive;
