import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import './index.css'
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
// import Home from './Home.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Auth0Provider
      domain="dev-doieoi3bsk50pjwl.us.auth0.com"
      clientId="DJVEjEYGp5VCOnVxzVnU76QzUkWyp9w3"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}>
      <App />
    </Auth0Provider>
    ,
  </BrowserRouter>
);
