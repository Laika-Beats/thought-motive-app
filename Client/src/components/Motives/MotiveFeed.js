import React from "react";
import Motive from "./Motive";

const MotiveFeed = ({ motives, setMotives }) => {
  return (
    <div>
      {motives.map((motive) => (
        <Motive motive={motive} motives={motives} setMotives={setMotives} />
      ))}
    </div>
  );
};

export default MotiveFeed;
