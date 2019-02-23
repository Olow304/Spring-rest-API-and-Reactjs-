import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from './Navbar'


class CreateContacts extends Component {

  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, email, phone } = this.state;

    axios.post('http://localhost:8086/api/contacts/add', { firstName, lastName, email, phone })
      .then((result) => {
        this.props.history.push("/")
      });
  }

  getAll= () =>{
    axios.get('http://127.0.0.1:8086/api/contacts/')
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    const { firstName, lastName, email, phone } = this.state;
    return (
      <div class="container">
      <Navbar />
        <div class="panel panel-default" style={{marginTop: '7%'}}>
          <div class="panel-heading">
            <h3 class="panel-title">
              ADD CONTACT
            </h3>
          </div>
          <div class="panel-body">
            <form method="post" onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="isbn">First Name:</label>
                <input type="text" class="form-control" name="firstName" value={firstName} onChange={this.onChange} placeholder="first Name" />
              </div>
              <div class="form-group">
                <label for="title">Last name:</label>
                <input type="text" class="form-control" name="lastName" value={lastName} onChange={this.onChange} placeholder="Last Name" />
              </div>
              <div class="form-group">
                <label for="author">Email:</label>
                <input type="text" class="form-control" name="email" value={email} onChange={this.onChange} placeholder="email" />
              </div>
              <div class="form-group">
                <label for="published_date">Phone:</label>
                <input type="text" class="form-control" name="phone" value={phone} onChange={this.onChange} placeholder="Phone Number" />
              </div>
              <button type="submit" class="btn btn-info">Add Contact</button> &nbsp;
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateContacts;