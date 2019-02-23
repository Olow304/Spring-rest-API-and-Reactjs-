import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from './Navbar'


class EditContact extends Component {

  constructor(props) {
    super(props);
    this.state = {
      contact: []
    };
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8086/api/contacts/get/'+this.props.match.params.id)
      .then(res => {
        this.setState({ contact: res.data });
        console.log(this.state.contact);
      });
  }

  onChange = (e) => {
    const state = this.state.contact
    state[e.target.name] = e.target.value;
    this.setState({contact:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, email, phone } = this.state.contact;

    axios.put('http://localhost:8086/api/contacts/update/'+this.props.match.params.id, { firstName, lastName, email, phone })
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
              EDIT Contact
            </h3>
          </div>
          <div class="panel-body">
            <form method="post" onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="name">First Name:</label>
                <input type="text" class="form-control" name="firstName" value={this.state.contact.firstName} onChange={this.onChange} placeholder="Name" />
              </div>
              <div class="form-group">
                <label for="title">Last Name:</label>
                <input type="text" class="form-control" name="lastName" value={this.state.contact.lastName} onChange={this.onChange} placeholder="Address" />
              </div>
              <div class="form-group">
                <label for="author">Email:</label>
                <input type="text" class="form-control" name="email" value={this.state.contact.email} onChange={this.onChange} placeholder="City" />
              </div>
              <div class="form-group">
                <label for="published_date">Phone Number:</label>
                <input type="text" class="form-control" name="phone" value={this.state.contact.phone} onChange={this.onChange} placeholder="Phone Number" />
              </div>
              <button type="submit" class="btn btn-default">Update</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default EditContact;