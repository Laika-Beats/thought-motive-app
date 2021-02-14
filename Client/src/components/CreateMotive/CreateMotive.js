import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { createMotive, updateMotive } from "../../actions/motives";

const CreateMotive = ({
  motiveData,
  setMotiveData,
  currentId,
  setCurrentId,
}) => {
  const dispatch = useDispatch();

  const motive = useSelector((state) =>
    currentId ? state.motives.find((m) => m._id === currentId) : null
  );

  useEffect(() => {
    if (motive) setMotiveData(motive);
  }, [motive]);

  // BUTTON HANDLERS
  const submitHandler = (event) => {
    event.preventDefault();
    if (currentId === 0) {
      dispatch(createMotive({ ...motiveData }));
      clearHandler();
    } else {
      dispatch(updateMotive(currentId, { ...motiveData }));
      clearHandler();
    }
  };
  const clearHandler = () => {
    setCurrentId(0);
    setMotiveData({ message: " " });
  };

  return (
    <form className="form-container">
      <h1>Write your motive: </h1>
      <textarea
        className="text-area"
        value={motiveData.message}
        onChange={(e) =>
          setMotiveData({ ...motiveData, message: e.target.value })
        }
      />

      <button className="submit-clear" onClick={submitHandler}>
        Motivate
      </button>
      <button className="submit-clear" onClick={clearHandler}>
        Clear
      </button>
    </form>
  );
};

export default CreateMotive;
