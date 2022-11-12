import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Project from './pages/Project';
import Contact from './pages/Contact';
import HandGestureRobot from './projectPages/HandGestureRobot';
import Qubic from './projectPages/Qubic';
import Detector from './projectPages/Detector';
import RentalTinder from './projectPages/RentalTinder';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projects" exact component={Project} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/projects/hand-gesture-robot" exact component={HandGestureRobot} />
          <Route path="/projects/qubic" exact component={Qubic} />
          <Route path="/projects/why-not-detecotr" exact component={Detector} />
          <Route path="/projects/rental-tinder" exact component={RentalTinder} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
