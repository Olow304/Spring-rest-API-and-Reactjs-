import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from './Navbar'


class ViewContact extends Component {

  constructor(props) {
    super(props);
    this.state = {
      contact: {}
    };
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8086/api/contacts/get/'+this.props.match.params.id)
      .then(res => {
        this.setState({ contact: res.data });
        console.log(this.state.contact);
      });
  }

  delete(id){
    console.log(id);
    axios.delete('http://127.0.0.1:8086/api/contacts/get/'+id)
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    return (
      <div class="container">
      <Navbar />
        <div class="panel panel-default" style={{marginTop: '7%'}}>
          <div class="panel-heading">
            <h3 class="panel-title">
              Contact Details
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Contacts List</Link></h4>
            <dl>
              <dt>First Name:</dt>
              <dd>{this.state.contact.firstName}</dd>
              <dt>Last Name:</dt>
              <dd>{this.state.contact.lastName}</dd>
              <dt>Email:</dt>
              <dd>{this.state.contact.email}</dd>
              <dt>Phone Number:</dt>
              <dd>{this.state.contact.phone}</dd>
            </dl>
            <Link to={`/edit/${this.state.contact.id}`} class="btn btn-success">Edit</Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.contact.id)} class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewContact;