import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import 'font-awesome/css/font-awesome.min.css'
import axios from 'axios'
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar'


class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      contacts: []
    }
  }

  componentDidMount(){
    axios.get('http://127.0.0.1:8086/api/contacts/')
    .then(res => {
      this.setState({contacts: res.data});
      console.log(this.state.contacts)
    }).catch(
      (error) => {
        console.log('error');
      }
	)

  }

  render() {
    return (
      <div className="App">
      <Navbar />
      <div className="container">
      <div className="panel panel-default" style={{marginTop: '7%'}}>
        <div className="panel-heading">
          <h3 className="panel-title">
            CONTACTS LIST
          </h3>
        </div>
        <div className="panel-body">
          <table className="table table-stripe">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone Number</th>
              </tr>
            </thead>
            <tbody>
              {this.state.contacts.map(c =>
                <tr>
                  <td><Link to={`/show/${c.id}`}>{c.firstName}</Link></td>
                  <td>{c.lastName}</td>
                  <td>{c.email}</td>
                  <td>{c.phone}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
      </div>
    );
  }
}

export default App;
