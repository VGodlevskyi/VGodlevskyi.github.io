import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import authTokenSelector from "../store/selectors/authTokenSelector";
import { getTokenFromSessionStorageAction } from "../store/actions/authActions";

const ProtectedRoute = (routerProps) => {

    const dispatch = useDispatch();
    const token = useSelector(authTokenSelector);

    useEffect(() => {
        dispatch(getTokenFromSessionStorageAction())
    }, [dispatch])

    return token ? <Route { ...routerProps } /> : <Redirect to={ '/login' }/>;
};

export default ProtectedRoute;