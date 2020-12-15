import { Router } from "@reach/router";

//Import Views
import Landing from "./views/Landing";
import HomePurchase from "./views/HomePurchase";
import Refinance from "./views/Refinance";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div>
      <NavBar />
      <Router>
        <Landing default />
        <HomePurchase path="/home-purchase" />
        <Refinance path="/home-refinance" />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
