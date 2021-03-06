import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { Pie } from "react-chartjs-2";

const options = {
  maintainAspectRatio: false,
  legend: {
    display: false,
    labels: {
      boxWidth: 10
    }
  }
};

class ColroChartComponent extends Component {
  componentDidMount() {
    this.props.fetchCustomerColorData();
  }

  render() {
    return (
      <div className="container">
        <div className="chart-container">
          <Pie data={this.props.data} options={options} />
        </div>
        <Table responsive striped bordered condensed hover>
          <thead>
            <tr>
              <th>Age</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {this.props.data.info.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.value}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default ColroChartComponent;
