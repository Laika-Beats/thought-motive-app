import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
