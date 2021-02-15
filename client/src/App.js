import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./routes/Home";

import AgentCallLog from "./routes/AgentCallLog";
import NumberCallLog from "./routes/AgentCallLog";
import  {CallCenterContextAPI}  from "./contextAPI/CallCenterContextAPI";

function App() {
  return (
    <CallCenterContextAPI>
      <div>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/agent/:id' component={AgentCallLog} />
            <Route exact path='/call/:number' component={NumberCallLog} />
          </Switch>
        </Router>
      </div>
    </CallCenterContextAPI>
  );
}

export default App;
