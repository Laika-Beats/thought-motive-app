import { useState, useEffect } from "react";

import MotiveFeed from "./components/Motives/MotiveFeed";
import CreateMotive from "./components/CreateMotive/CreateMotive";

function App() {
  const [currentId, setCurrentId] = useState(0);
  const [textInput, setTextInput] = useState("");
  const [motives, setMotives] = useState([]);
  const [motiveData, setMotiveData] = useState({
    message: " ",
  });

  return (
    <div className="App">
      <CreateMotive
        textInput={textInput}
        setTextInput={setTextInput}
        motives={motives}
        setMotives={setMotives}
        motiveData={motiveData}
        setMotiveData={setMotiveData}
        currentId={currentId}
        setCurrentId={setCurrentId}
      />
      <MotiveFeed motives={motives} setMotives={setMotives} />
    </div>
  );
}

export default App;
