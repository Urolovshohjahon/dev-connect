import './App.css';
import NavTop from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import { Provider } from 'react-redux';
import store from './store';
import Alert from './components/layout/Alert';
import setAuthToken from './utils/setAuthToken';
import { loadUser } from './actions/auth';
import { useEffect } from 'react';
import Dashboard from './components/dashboard/Dashboard';
import PrivateRoute from './components/routing/privateRoute';
import CreateProfile from './components/profile-forms/CreateProfile';
import EditProfile from './components/profile-forms/EditProfile';
import AddExperience from './components/profile-forms/AddExperience';
import AddEducation from './components/profile-forms/AddEducation';
import Profiles from './components/profiles/Profiles';
import Profile from './components/profile/Profile';
import Posts from './components/posts/Posts';
import Post from './components/post/Post';


if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <div className='App'>
      <Provider store={store}>
        <BrowserRouter>
          <NavTop />
          <Alert />
          <Route exact path='/'>
            <Landing />
          </Route>
          <Switch>
            <Route exact path='/login'>
              
              <Login />
            </Route>
            <Route path='/register'>
              
              <Register />
            </Route>
            <Route exact path='/profiles'>
              <Profiles/>
            </Route>
            <PrivateRoute exact path='/profile/:id' component={Profile} />
            <PrivateRoute exact path='/dashboard' component={Dashboard} />
            <PrivateRoute exact path='/create-profile' component={CreateProfile} />
            <PrivateRoute exact path='/edit-profile' component={EditProfile} />
            <PrivateRoute exact path='/add-experience' component={AddExperience} />
            <PrivateRoute exact path='/add-education' component={AddEducation} />
            <PrivateRoute exact path='/posts' component={Posts} />
            <PrivateRoute exact path='/posts/:id' component={Post} />
          </Switch>
        </BrowserRouter>
      </Provider>

      
    </div>
  );
}

export default App;
