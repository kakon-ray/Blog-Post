import logo from "./logo.svg";
import "./App.css";
import Home from "./page/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddEdit from "./page/AddEdit/AddEdit";
import View from "./page/View/View";
import About from "./page/About/About";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <ToastContainer position="top-center" />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/add" component={AddEdit} />
          <Route exact path="/about" component={About} />
          <Route exact path="/view/:id" component={View} />
          <Route exact path="/about/:id" component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
