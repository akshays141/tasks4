import React from "react";

const withAuthorization = (WrappedComponent, requiredRole) =>{
    return function(props){

        const {isAuthenticated, role} = props;

        if(!isAuthenticated){
            return <div>Unauthorised: Please log in...</div>
        }

        if(requiredRole && role!==requiredRole){
            return <div>Access Denied </div>
        }

        return <WrappedComponent {...props}/>;
    };
};

export default withAuthorization;