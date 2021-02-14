import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MotiveFeed from "./components/Motives/MotiveFeed";
import CreateMotive from "./components/CreateMotive/CreateMotive";
import { fetchMotives } from "./actions/motives";
import "./components/styles/app.scss";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [currentId, setCurrentId] = useState(0);
  const [motiveData, setMotiveData] = useState({
    message: " ",
  });

  const motives = useSelector((state) => state.motives);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMotives());
  }, [dispatch, currentId]);

  return (
    <>
      <Navbar />
      <div className="App">
        <CreateMotive
          motiveData={motiveData}
          setMotiveData={setMotiveData}
          currentId={currentId}
          setCurrentId={setCurrentId}
        />
        <MotiveFeed motives={motives} setCurrentId={setCurrentId} />
      </div>
    </>
  );
}

export default App;
