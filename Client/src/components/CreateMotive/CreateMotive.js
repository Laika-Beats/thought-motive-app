import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { createMotive, updateMotive } from "../../actions/motives";

const CreateMotive = ({
  textInput,
  setTextInput,
  motives,
  setMotives,
  motiveData,
  setMotiveData,
  currentId,
}) => {
  const dispatch = useDispatch();

  const motive = useSelector((state) =>
    currentId ? state.motives.find((m) => m._id === currentId) : null
  );

  useEffect(() => {
    if (motive) setMotiveData(motive);
  }, [motive]);

  const motiveInputHandler = (event) => {
    setTextInput(event.target.value);
  };
  const createMotiveHandler = (event) => {
    event.preventDefault();
    dispatch(createMotive({ ...motiveData }));
    setTextInput(" ");
  };

  return (
    <form onSubmit={createMotiveHandler}>
      <textarea
        onChange={(e) =>
          setMotiveData({ ...motiveData, message: e.target.value })
        }
        value={motiveData.message}
        // onChange={motiveInputHandler}
      />
      <button>Submit</button>
    </form>
  );
};

export default CreateMotive;
