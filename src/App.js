import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './conponents/Header/Header';
import Footer from './conponents/Footer/Footer';
import Home from './conponents/Home/Home';
import Program from './conponents/Program/Program';
import Faculty from './conponents/Faculty/Faculty';
import About from './conponents/About/About';
import Contact from './conponents/Contact/Contact';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Notfound from './conponents/Notfound/Notfound';
import Blog from './conponents/Blog/Blog';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
                <Header></Header>
                <Switch>
                    <Route path='/home'>
                        <Home></Home>
                    </Route>
                    <Route exact path='/'>
                        <Home></Home>
                    </Route>
                    <Route path='/programs'>
                        <Program></Program>
                    </Route>
                    <Route path='/faculty'>
                        <Faculty></Faculty>
                    </Route>
                    <Route path='/blog'>
                      <Blog></Blog>
                    </Route>
                    <Route path='/about'>
                        <About></About>
                    </Route>
                    <Route path='/contact'>
                        <Contact></Contact>
                    </Route>
                    <Route>
                      <Notfound></Notfound>
                    </Route>
                </Switch>
                <Footer></Footer>
            </BrowserRouter>
            
    </div>
  );
}

export default App;
