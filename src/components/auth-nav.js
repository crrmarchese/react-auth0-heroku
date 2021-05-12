// src/components/auth-nav.js

import React from "react";
import AuthenticationButton from "./authentication-button";

// Authentication button toggles between login and logout
const AuthNav = () => (
  <div className="navbar-nav ml-auto">
    <AuthenticationButton /> 
  </div>
);

export default AuthNav;