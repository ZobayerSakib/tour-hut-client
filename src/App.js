import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Header from './pages/shared/Header/Header';
import TourPackage from './pages/TourPackage/TourPackage';
import Login from './pages/Login/Login';
import Footer from './pages/shared/Footer/Footer';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import AddService from './pages/AddService/AddService';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/about'>
            <About></About>
          </Route>
          <Route exact path='/add'>
            <AddService></AddService>
          </Route>
          <PrivateRoute exact path='/packages'>
            <TourPackage></TourPackage>
          </PrivateRoute>
          <Route exact path='/login'>
            <Login></Login>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
