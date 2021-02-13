import React, { useState } from "react";

const CreateMotive = ({ textInput, setTextInput, motives, setMotives }) => {
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