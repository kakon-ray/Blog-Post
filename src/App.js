import logo from "./logo.svg";
import "./App.css";
import Home from "./page/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddEdit from "./page/AddEdit/AddEdit";
import View from "./page/View/View";
import About from "./page/About/About";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/add" component={AddEdit} />
          <Route exact path="/view" component={View} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
