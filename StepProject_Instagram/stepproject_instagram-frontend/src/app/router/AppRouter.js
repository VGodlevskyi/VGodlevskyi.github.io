import React from 'react';
import { Route, Switch } from "react-router-dom";
import Main from "../pages/Main/Main";
import UserProfile from "../pages/UserProfile/UserProfile";
import ProtectedRoute from "./ProtectedRoute";
import NotFound from "../pages/404/404";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";

const AppRouter = () => {
    return (
        <Switch>
            <ProtectedRoute path={ '/' } exact component={ Main }/>
            <ProtectedRoute path={ '/user/:userId' } exact component={ UserProfile }/>
            <Route path={ '/login' } component={ Login }/>
            <Route path={ '/signup' } component={ SignUp }/>
            <Route path={ '*' } component={ NotFound }/>
        </Switch>
    );
};

export default AppRouter;