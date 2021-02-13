import React from "react";

const Motive = ({ motive, motives, setMotives }) => {
  const deleteMotive = () => {
    console.log(motive);
    setMotives(motives.filter((state) => state !== motive));
  };
  return (
    <div>
      <h2>User</h2>
      <h4>date</h4>
      <h3>{motive}</h3>
      <button>Like</button>
      <button onClick={deleteMotive}>Delete</button>
    </div>
  );
};

export default Motive;
