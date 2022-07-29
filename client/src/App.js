// import { BrowserRouter as  Router, Switch, Route } from "react-router-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.scss';
import CallPage from "./components/CallPage/CallPage";
import HomePage from "./components/HomePage/HomePage";
import NoMatch from "./components/NoMatch/NoMatch";

function App() {
  return (
    // <Router>
    //   <Switch>
    //     <Route exact path="/:id">
    //       <CallPage/>
    //     </Route>
    //     <Route exact path="/">
    //       <HomePage/>
    //     </Route>
    //     <Route path="*">
    //       <NoMatch/>
    //     </Route>
    //   </Switch>
    // </Router>

<BrowserRouter>
<Routes>
  <Route path="/" element={<HomePage />}/>
  <Route path="/:id" element={<CallPage />}/>
  <Route path="*" element={<NoMatch />}/>
    
</Routes>
</BrowserRouter>
  );
}

export default App;
