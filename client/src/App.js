import { Router } from "@reach/router";

//Import Views
import Landing from "./views/Landing";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div>
      <NavBar />
      <Router>
        <Landing default />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
