import React, { useState } from "react";

const CreateMotive = () => {
  // const [motives, setMotives] = useState([]);
  const [inputText, setInputText] = useState("");

  const motiveInputHandler = (event) => {
    console.log(inputText);
    setInputText(event.target.value);
  };
  const createMotiveHandler = () => {};

  return (
    <form onSubmit={createMotiveHandler}>
      <textarea onChange={motiveInputHandler} />
      <button>Submit</button>
    </form>
  );
};

export default CreateMotive;
