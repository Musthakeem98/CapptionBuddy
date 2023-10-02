import React, { useState } from "react";
import Navigation from "./Navigation";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./Sidebar";
import "../styles/profile.css";
import Button from "react-bootstrap/Button";

function Profile() {
  const [changeName, setChangeName] = useState("");
  const [changeEmail, setChangeEmail] = useState("");
  const [changePassword, setChangePassword] = useState("");

  const handleSaveClick = () => {
    console.log("Change Name:", changeName);
    console.log("Change Email:", changeEmail);
    console.log("Change Password:", changePassword);
  };

  const perviousName = "Dinesh";
  const perviousEmail = "dinesh@gmail.com";
  const perviouspass = "***";

  return (
    <div>
      <Navigation />
      <Container fluid>
        <Row>
          <Col md={2} style={{ paddingLeft: "0px" }}>
            <Sidebar />
          </Col>
          <Col md={10}>
            <div className="container">
              <div className="heading">Account Settings</div>
              <p className="subheading">Edit your email, name, etc.</p>
            </div>
            <div className="row">
              <div className="col-md-5 col-lg-5">
                <div className="container pt-5">
                  <label className="d-flex justify-content-start mb-1">
                    Name
                  </label>
                  <p className="sample">{perviousName}</p>
                </div>
              </div>
              <div className="col-md-7 col-lg-5">
                <div className="container pt-5">
                  <label className="d-flex justify-content-start mb-1">
                    Change Name
                  </label>
                  <input
                    className="d-flex justify-content-start"
                    type="text"
                    id="change-name"
                    name="change_name"
                    value={changeName}
                    onChange={(e) => setChangeName(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="col-md-5 col-lg-5">
                <div className="container pt-5">
                  <label className="d-flex justify-content-start mb-1">
                    Email
                  </label>
                  <p className="sample">{perviousEmail}</p>
                </div>
              </div>
              <div className="col-md-7 col-lg-5">
                <div className="container pt-5">
                  <label className="d-flex justify-content-start mb-1">
                    Change Email
                  </label>
                  <input
                    className="d-flex justify-content-start"
                    type="text"
                    id="change-email"
                    name="change_email"
                    value={changeEmail}
                    onChange={(e) => setChangeEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="col-md-5 col-lg-5">
                <div className="container pt-5">
                  <label className="d-flex justify-content-start">
                    Password
                  </label>
                  <p className="sample" type="password">
                    {perviouspass}
                  </p>
                </div>
              </div>
              <div className="col-md-7 col-lg-5">
                <div className="container pt-5">
                  <label className="d-flex justify-content-start">
                    Change Password
                  </label>
                  <input
                    className="d-flex justify-content-start password-field" // Add class for password field
                    type="password"
                    id="change-password"
                    name="change_password"
                    value={changePassword}
                    onChange={(e) => setChangePassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="col-12 col-md-3 pt-4">
                <div className="container">
                  <button className="savebtn" onClick={handleSaveClick}>
                    Save
                  </button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Profile;

