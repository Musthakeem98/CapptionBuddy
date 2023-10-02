import { Link } from "react-router-dom";
import "../styles/landingpage.css";
import Header from "../pages/Header";
import React, { useState } from 'react';  // Removed 'useEffect' import
import Keycloak from 'keycloak-js';

export default function Landingpage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [keycloak, setKeycloak] = useState(null);

  // Removed 'useEffect' block, we don't want to auto-login here

  const handleLoginClick = () => {
    const initOptions = {
      url: 'http://localhost:8085/',
      realm: 'Capption_buddy',
      clientId: 'capption_buddy',
      onLoad: 'login-required', 
      KeycloakResponseType: 'code',
    };

    const kc = new Keycloak(initOptions);
    setKeycloak(kc);

    kc
      .init({ onLoad: initOptions.onLoad, KeycloakResponseType: 'code' })
      .then((auth) => {
        if (auth) {
          console.info('Authenticated');
          setAuthenticated(true);
        } else {
          console.error('Authentication failed');
        }
      })
      .catch(() => {
        console.error('Keycloak initialization failed');
      });
  };

  return (
    <div className="background">
      <Header />
      <div className="container" style={{ color: "#000", fontFamily: "Inter", fontSize: "51px", fontStyle: "normal", fontWeight: "bold", lineHeight: "normal", paddingTop: "140px" }}>
        A better, 10x faster way to write
      </div>
      <section className="animation">
        <div className="first" style={{ fontSize: "50px", color: "#7b2cbf", fontWeight: "bold" }}>
          <div>Seo Description</div>
        </div>
        <div className="second" style={{ fontSize: "50px", color: "#7b2cbf", fontWeight: "bold" }}>
          <div>Blogs</div>
        </div>
        <div className="third" style={{ fontSize: "50px", color: "#7b2cbf", fontWeight: "bold" }}>
          <div>Seo Titles</div>
        </div>
      </section>
      <div style={{ fontSize: "24px", color: "#6c757d" }}>
        RyteWriter is an AI-powered writing assistant that helps you write faster by
        <br />
        providing intelligent suggestions for your content
      </div>
      <div className="container">
        <div className="d-flex justify-content-center p-4">
          <button className="cssbuttons-io-button" onClick={handleLoginClick}> 
            Get started
            <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
