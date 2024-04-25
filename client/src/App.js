import React from "react";
import "./App.css";
import Home from "./mainPages/home";
import Register from "./components/authentication/register";
import Signin from "./components/authentication/signin";
import ForgotPassword from "./components/authentication/forgotPassword";
import List from "./mainPages/list";
import Navbar from "./components/navbar/navbar";
import Details from "./mainPages/details";
import UpdatePassword from "./components/authentication/updatePassword";
import { Route, Switch } from "react-router-dom";
import NotFound from "./components/notfound/notfound";
import ResetPassword from "./components/authentication/resetPassword";
import UserProfile from './components/user/userprofile.jsx';
import EdituserProfile from './components/user/edituserprofile';
import UserBookings from './components/user/userbooking';
import UserReviews from './components/user/userreview';

function App() {
  const [signedIn, setsignedIn] = React.useState(false);
  const [history, sethistory] = React.useState([]);
  const [token,settoken]=React.useState("");
  const [user, setuser] = React.useState({});

  return (
    <div className="app">
      <Navbar
        signedIn={signedIn}
        setsignedIn={setsignedIn}
        sethistory={sethistory}
        token={token}
        settoken={settoken}
        user={user}
        setuser={setuser}
      />
      <Switch>
        <Route
          exact
          path="/"
          component={() => (
            <Home
            signedIn={signedIn}
        setsignedIn={setsignedIn}
        sethistory={sethistory}
        token={token}
        settoken={settoken}
        user={user}
        setuser={setuser}
            />
          )}
        />
        <Route
          exact
          path="/register"
          component={() => (
            <Register
              setsignedIn={setsignedIn}
              sethistory={sethistory}
              settoken={settoken}
              setuser={setuser}
            />
          )}
        />
        <Route
          exact
          path="/signin"
          component={() => (
            <Signin
              setsignedIn={setsignedIn}
              sethistory={sethistory}
              settoken={settoken}
              setuser={setuser}
            />
          )}
        />
        <Route
          exact
          path="/forgotPassword"
          component={() => <ForgotPassword />}
        />
        <Route
          exact
          path="/resetPassword/:token"
          component={() => (
            <ResetPassword
             sethistory={sethistory}
              setsignedIn={setsignedIn}
              setuser={setuser}
            />
          )}
        />
        <Route
          exact
          path="/updatePassword"
          component={() => <UpdatePassword token={token}/>}
        />
      
       <Route
       exact
            path="/user/profile"
            component={()=>(<UserProfile user={user} setuser={setuser} signedIn={signedIn} sethistory={sethistory} token={token} />)}
          />
          <Route
          exact
            path="/user/updateProfile"
            component={()=>(<EdituserProfile user={user} setuser={setuser} signedIn={signedIn} sethistory={sethistory} token={token}/>)
            }
          />
          <Route
          exact
            path="/user/bookings"
            component={()=>(<UserBookings user={user} signedIn={signedIn} sethistory={sethistory} token={token}/>)}
          />
          <Route
          exact
            path="/user/reviews"
            component={()=>(<UserReviews user={user} signedIn={signedIn} sethistory={sethistory} token={token}/>)}
          />
            
        <Route
         exact path="/search"
          component={() => 
        <List 
        signedIn={signedIn}
        setsignedIn={setsignedIn}
        sethistory={sethistory}
        token={token}
        settoken={settoken}
        user={user}
        setuser={setuser}
        />} />
        <Route
          exact
          path="/details"
          component={() => (
            <Details signedIn={signedIn} sethistory={sethistory} token={token}/>
          )}
        />

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
