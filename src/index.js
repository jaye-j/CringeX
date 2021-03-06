// ===React===
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Feed from "./components/pages/Feed";
// import * as serviceWorker from './serviceWorker';

// ===CSS===
import "./index.css";

// ===Redux===
import { Provider } from "react-redux";
import { createStore } from "redux";
import Reducer from "./redux/reducers/userReducers";

// ===Routing===
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AuthRoute from "./utility/AuthRoute";
import SignUpRoute from "./utility/SignUpRoute";
import ProtectedRoute from "./utility/ProtectedRoute";

// ===Layout===
import BaseLayout from "./components/layout/BaseLayout";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import BlankFooter from "./components/layout/FooterBlank";

// ===Pages===
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Profile from "./components/pages/ProfileView";
import Upload from "./components/pages/UploadPage";

// ===Material UI===

// ===Store===
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div id="container">
        <Header />
        <Switch>
          <AuthRoute exact path="/" component={Login} />
          <SignUpRoute exact path="/register" component={Register} />
          <ProtectedRoute exact path="/feed" component={Feed} />
          <ProtectedRoute exact path="/profile" component={Profile} />
          <ProtectedRoute exact path="/upload" component={Upload} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
