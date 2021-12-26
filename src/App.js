import './App.css';
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./components/pages/HomePage/Home";
import About from "./components/pages/AboutPage/About";
import Blog from "./components/pages/BlogPage/Blog";

function App() {
  return (
    <Router>
      <Navbar/>
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/about' exact component={About}/>
            <Route path='/blog' exact component={Blog}/>
        </Switch>
    </Router>
  );
}

export default App;
