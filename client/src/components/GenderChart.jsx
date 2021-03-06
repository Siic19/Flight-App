import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { Bar } from "react-chartjs-2";

const options = {
  maintainAspectRatio: false,
  legend: {
    display: false,
    labels: {
      boxWidth: 10
    }
  },
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true
        }
      }
    ]
  }
};

class GenderChartComponent extends Component {
  componentDidMount() {
    this.props.fetchCustomersGenderData();
  }

  render() {
    return (
      <div className="container">
        <div className="chart-container">
          <Bar data={this.props.data} options={options} />
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

export default GenderChartComponent;
