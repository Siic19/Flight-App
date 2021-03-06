import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from "react-router-dom";

class AllDataComponent extends Component {
  componentDidMount() {
    this.props.fetchCustomers();
  }

  handleClick(id) {
    this.props.deleteCustomer(id);
  }

  render() {
    return <div className="container">
    <div className="all-data-container">
        <Table responsive striped bordered condensed hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Age</th>
              <th>Bought</th>
              <th>Note</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {[...this.props.customers]
              .reverse()
              .map(item => (
                <tr key={item.id}>
                  <td> {item.name} </td>
                  <td> {item.email} </td>
                  <td> {item.gender} </td>
                  <td> {item.age} </td>
                  <td> {item.purchased.length} </td>
                  <td> {item.reason_to_buy} </td>
                  <td>
                    <Link to={{ pathname: `/customer/${item.id}` }}>
                      Edit
                    </Link>
                  </td>
                  <td>
                    <a className="" onClick={() =>  {if(window.confirm('Delete this customer?')) {this.handleClick(item.id)};}}>Delete</a>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
        </div>
      </div>;
  }
}

export default AllDataComponent;

