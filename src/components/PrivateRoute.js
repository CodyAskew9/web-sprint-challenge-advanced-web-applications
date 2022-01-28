import React from "react";
import { Route } from "react-router-dom";

function PrivateRoute({component: Component, ...rest}) {
  return <Route {...rest} render={(props) => {
      if (localStorage.getItem('Token')) {
        return ( <Component  {...props}/>);
      } else {
        return (<Redirect to = '/'/>)
      }
  }}/>
}

export default PrivateRoute;

//Task List:
//1. Complete PrivateRoute