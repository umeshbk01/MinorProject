import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { authenticationService } from '../actions/authenticationService';

const PrivateRoute = ({ component: Component, ...rest}) => (
    <Route
        {...rest}
        render={props =>{
            const currentUser = authenticationService.currentUser;
            if(!currentUser){
                return(
                    <Redirect to={{pathname: '/', state: { from: props.location } }}
                    />
                );
            }
            return <Component {...props} />
        }}
    />    
);

export default PrivateRoute;