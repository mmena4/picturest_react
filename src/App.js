import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BoardPage from "./pages/boardPage";
import UserProfilePage from "./pages/userProfilePage";
import HomePage from "./pages/homePage";
import LoginPage from "./pages/loginPage";

function App() {
  const [user, setUser] = useState({});
  const token = localStorage.getItem('token');
  const localStorageUser = JSON.parse(localStorage.getItem('user'));
  
  let UserId = null;
  if (localStorageUser === null) {
      UserId = 1;
  }else{
      UserId = localStorageUser._id;
    }

  useEffect(() => {
    fetch("http://localhost:5000/api/users/"+UserId)
      .then((response) => response.json())
      .then((json) => setUser(json));
  }, []);

  return (
    <div className="app__body">
      <Router>
        <Header user={user} token={token} />
        <Switch>
          <Route exact path="/boards/:id">
            <BoardPage />
          </Route>
          <Route exact path="/user">
            {token ?
                <UserProfilePage user={user}/>
                :
                <LoginPage />
            }
          </Route>
          <Route exact path="/">
          <LoginPage />
            {/* <HomePage user={user} /> */}
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
