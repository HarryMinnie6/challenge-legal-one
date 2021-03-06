import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./routes/Home";

import AgentCallLog from "./routes/AgentCallLog";
import NumberCallLog from "./routes/NumberCallLog";
import AgentProfile from "./routes/AgentProfile";
import  {CallCenterContextAPI}  from "./contextAPI/CallCenterContextAPI";

function App() {
  return (
    
      <div>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/agent/profile/:identifier' component={AgentProfile} />
            <Route exact path='/agent/:identifier' component={AgentCallLog} />
            <Route exact path='/call/:number' component={NumberCallLog} />
          </Switch>
        </Router>
      </div>
   
  );
}

export default App;
