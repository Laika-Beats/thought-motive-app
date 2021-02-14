import React from "react";
import Motive from "./Motive";

const MotiveFeed = ({ motives, setMotives, motiveData, setCurrentId }) => {
  return (
    <div>
      {motives.map((motive) => (
        <Motive
          key={motive._id}
          motiveData={motiveData}
          motive={motive}
          motives={motives}
          setMotives={setMotives}
          setCurrentId={setCurrentId}
        />
      ))}
    </div>
  );
};

export default MotiveFeed;
