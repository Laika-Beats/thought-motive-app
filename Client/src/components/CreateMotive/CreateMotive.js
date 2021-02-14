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
  setCurrentId,
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
    if (currentId === 0) {
      dispatch(createMotive({ ...motiveData }));
      motiveData.message = " ";
      setCurrentId(0);
    } else {
      dispatch(updateMotive(currentId, { ...motiveData }));
      motiveData.message = " ";
      setCurrentId(0);
    }
  };

  return (
    <form onSubmit={createMotiveHandler}>
      <textarea
        value={motiveData.message}
        onChange={(e) =>
          setMotiveData({ ...motiveData, message: e.target.value })
        }

        // onChange={motiveInputHandler}
      />
      <button>Submit</button>
    </form>
  );
};

export default CreateMotive;
