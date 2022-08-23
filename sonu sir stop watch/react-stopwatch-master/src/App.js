import axios from "axios";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import PostDetails from "./PostDetails";
import Stopwatch from "./Stopwatch";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/stopwatch' exact component={Stopwatch} />
        <Route path='/post/:id' component={PostDetails} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
