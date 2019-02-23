import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      contact: {}
    };
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-primary">
        <Link to={'/'} style={{minWidth: '280px', marginRight: '0px'}} className="navbar-brand" >
            Reactjs  <span className="page title" >
            - Spring API backend<span className="title-string"></span>
            </span>
        </Link>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar" aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="main-navbar">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item ">

            <Link to={'/'}><span className="nav-link">  <i className="fa fa-list-ul" aria-hidden="true"></i> View </span></Link>
            </li>


            <li clasclassNames="nav-item">

            <Link to={'/create'}><span className="nav-link" > <i className="fa fa-plus-square" aria-hidden="true"></i> New </span></Link>
            </li>

            </ul>

        </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;