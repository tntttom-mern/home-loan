import { Router } from "@reach/router";

//Import Views
import Landing from "./views/Landing";

import NavBar from "./components/NavBar";

import "./App.css";

function App() {
  return (
    <div>
      <NavBar />
      <Router>
        <Landing default />
      </Router>
    </div>
  );
}

export default App;
