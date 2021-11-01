import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Header from './pages/shared/Header/Header';
import Login from './pages/Login/Login';
import Footer from './pages/shared/Footer/Footer';
import AddService from './pages/AddService/AddService';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Details from './pages/Details/Details';
import NotFound from './pages/NotFound/NotFound';
import OrderComplete from './pages/OrderComplete/OrderComplete';

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
            <Route exact path='/add'>
              <AddService></AddService>
            </Route>
            <Route exact path='/services/details/:id'>
              <Details></Details>
            </Route>
            <Route exact path='/login'>
              <Login></Login>
            </Route>
            <PrivateRoute exact path='/orderComplete'>
              <OrderComplete></OrderComplete>
            </PrivateRoute>
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
