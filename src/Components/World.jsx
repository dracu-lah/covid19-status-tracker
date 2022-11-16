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
    Axios.get("https://corona.lmao.ninja/v2/countries").then((response) => {
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
            <tbody>{this.state.data.map((itm,k)=>{
              return(
                <tr>
                  <td>{itm.country}
                  <img style={{width:'64px', marginLeft:'10px'}} src={itm.countryInfo.flag} alt="" />
                  </td>

                  <td>{itm.cases}</td>
                  <td>{itm.recovered}</td>
                  <td>{itm.deaths}</td>
                </tr>
              )
            })}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default World;
