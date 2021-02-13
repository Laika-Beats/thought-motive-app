import React, { useState } from "react";

const CreateMotive = () => {
  const [textInput, setTextInput] = useState("");
  const [motives, setMotives] = useState([]);

  const motiveInputHandler = (event) => {
    setTextInput(event.target.value);
  };
  const createMotiveHandler = (event) => {
    event.preventDefault();
    setMotives([...motives, textInput]);
    setTextInput(" ");
  };

  return (
    <form onSubmit={createMotiveHandler}>
      <textarea value={textInput} onChange={motiveInputHandler} />
      <button>Submit</button>
    </form>
  );
};

export default CreateMotive;
