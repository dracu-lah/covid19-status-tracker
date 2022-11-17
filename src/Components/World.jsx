import React, { Component } from "react";
import Axios from "axios";
export class World extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    Axios.get(
      "https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST"
    ).then((response) => {
      this.setState({ data: response.data });
    });
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <table className="table table-primary table-bordered table-striped">
            <thead>
              <td>Country</td>
              <td>Total Cases</td>
              <td>Total recovered</td>
              <td>Death</td>
            </thead>
            <tbody>
              {this.state.data.map((itm, k) => {
                return (
                  <tr>
                    <td>{itm.country}</td>
                    <td>{itm.infected}</td>
                    <td>{itm.recovered}</td>
                    <td>{itm.deceased}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default World;
