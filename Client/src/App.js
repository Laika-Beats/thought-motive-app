import { useState } from "react";
import MotiveFeed from "./components/Motives/MotiveFeed";
import CreateMotive from "./components/CreateMotive/CreateMotive";

function App() {
  const [textInput, setTextInput] = useState("");
  const [motives, setMotives] = useState([]);

  return (
    <div className="App">
      <CreateMotive
        textInput={textInput}
        setTextInput={setTextInput}
        motives={motives}
        setMotives={setMotives}
      />
      <MotiveFeed motives={motives} setMotives={setMotives} />
    </div>
  );
}

export default App;
