import React from "react";
import Motive from "./Motive";

const MotiveFeed = ({ motives, setCurrentId }) => {
  return (
    <div>
      {motives.map((motive) => (
        <Motive key={motive._id} motive={motive} setCurrentId={setCurrentId} />
      ))}
    </div>
  );
};

export default MotiveFeed;
