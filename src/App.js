import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Header from './pages/shared/Header/Header';
import Login from './pages/Login/Login';
import Footer from './pages/shared/Footer/Footer';
import AddService from './pages/AddService/AddService';
import OrderPlace from './pages/OrderPlace/OrderPlace';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Details from './pages/Details/Details';
import MyPackage from './pages/MyPackage/MyPackage';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <div>
      <AuthProvider>
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
            <PrivateRoute exact path='/myPackage'>
              <MyPackage></MyPackage>
            </PrivateRoute>
            <Route exact path='/add'>
              <AddService></AddService>
            </Route>
            <PrivateRoute exact path='/orderPlace'>
              <OrderPlace></OrderPlace>
            </PrivateRoute>
            <Route exact path='/orderPlace/:id'>
              <Details></Details>
            </Route>
            <Route exact path='/login'>
              <Login></Login>
            </Route>
            <Route exact path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
