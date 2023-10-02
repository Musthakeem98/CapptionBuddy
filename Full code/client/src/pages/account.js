import React from "react";
import Navigation from "./Navigation";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/account.css";
import Sidebar from "./Sidebar";
import Chart from "./chart";
import Progress from "./Progress";

function Page2() {
  return (
    <div>
      <Navigation />
      <Container fluid>
        <Row>
          <div className="col-md-2 " style={{paddingLeft:"0px"}}>
            <Sidebar />
          </div>
          <div  className="col-md-5 col-sm-12 d-flex justify-content-center">
            <div className="chart">
              <h3 className="usagetext" style={{textAlign:"left"}}>Usage</h3>
              {/* Add padding around Chart */}
              <Chart />
            </div>
          </div>
          <div className="d-block p-2 col-md-5 col-sm-12 d-flex justify-content-center">
            <div>
              {/* Add padding around Progress */}
              <Progress />
              <div className="container mt-2">
  <div style={{ fontSize: "14px", textAlign:"left" }}>Credits used this month: 6.7K/10K (66.56%)</div>
  <div style={{ fontSize: "14px" }}>Monthly credits will reset on: Aug 10, 11:56 am</div>
</div>


            </div>
          </div>

        </Row>
      </Container>
    </div>
  );
}

export default Page2;

