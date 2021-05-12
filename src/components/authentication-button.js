// src/components/authentication-button.js

import React from "react";

import LoginButton from "./login-button";
import LogoutButton from "./logout-button";

import { useAuth0 } from "@auth0/auth0-react";

const AuthenticationButton = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <LogoutButton /> : <LoginButton />; // If user is authenticated (ie logged in) then show the logout button, otherwise show the login button
};

export default AuthenticationButton;