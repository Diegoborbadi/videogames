import{Route,Switch}from "react-router-dom"
import About from './views/about/about';
import Create from './views/create/create';
import Detail from './views/detail/detail';
import Home from './views/home/home';
import Landing from './views/landing/landing';
import Navbar from "./components/navbar/navbar";
import './App.css';

const App = () => {
  return (
      <div className="App-page">
          <Route exact path={"/"} component={Landing}/>
          <Route path={["/home", "/videogame/:id", "/create","/about"]} component={Navbar}/>
          <Switch>
              <Route path={"/home"} component={Home}/>
              <Route path={"/videogame/:id"} component={Detail}/>
              <Route path={"/create"} component={Create}/>
              <Route path={"/about"} component={About}/>
          </Switch>
      </div>
  );
};


export default App;