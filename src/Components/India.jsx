import React, { Component } from "react";
import IndiaFlag from "../images/india.png";
import Card from "react-bootstrap/Card";
import StateData from "./StateData";

import axios from "axios";

export class India extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
    };
  }
  componentDidMount() {
    axios
      .get("https://corona.lmao.ninja/v2/countries/india")
      .then((response) => {
        this.setState({ data: response.data });
      });
  }
  render() {
    return (
      <div className="row ">
        <div className="col-md-12">
          <img src={IndiaFlag} alt="" />
          <h3>INDIA</h3>
        </div>
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-3">
              <Card
                className="badge text-bg-primary"
                style={{ width: "18rem" }}
              >
                <Card.Body className="text-center">
                  <Card.Title>Total Cases</Card.Title>
                  <h3>{this.state.data.cases}</h3>
                  <Card.Text>[Today : {this.state.todayCases}]</Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-3">
              <Card
                className="badge text-bg-warning"
                style={{ width: "18rem" }}
              >
                <Card.Body className="text-center">
                  <Card.Title>Active Cases</Card.Title>
                  <h3>{this.state.data.active}</h3>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-3">
              <Card
                className="badge text-bg-success"
                style={{ width: "18rem" }} 
              >
                <Card.Body className="text-center">
                  <Card.Title>Recovered</Card.Title>
                  <h3>{this.state.data.recovered}</h3>
                  <Card.Text>[Today : {this.state.recovered}]</Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-3">
              <Card className="badge text-bg-danger" style={{ width: "18rem" }}>
                <Card.Body className="text-center">
                  <Card.Title>Deaths</Card.Title>
                  <h3>{this.state.data.deaths}</h3>
                  <Card.Text>[Today : {this.state.todayCases}]</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <StateData />
        </div>
      </div>
    );
  }
}

export default India;
