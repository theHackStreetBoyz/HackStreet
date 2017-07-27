'use strict'

/**
 * `babel-preset-env` converts this general import into a selection of specific
 * imports needed to polyfill the currently-supported environment (as specified
 * in `.babelrc`). As of 2017-06-04, this is primarily to support async/await.
 */
import 'babel-polyfill'

import React, { Component } from 'react'
import {render} from 'react-dom'
import {Provider, connect} from 'react-redux'
import {BrowserRouter as Router, Switch, Route, Redirect, Link} from 'react-router-dom'



const Navbar = () => {

  return (
    <div>
    <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <a className="nav-link">
          <Link to="/">
          HackStreet Store
          </Link>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link">
          <Link to="/artists">
          Artists
          </Link>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link">
          <Link to="/songs">
          Songs
          </Link>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link">
          <Link to="/cart">
          Cart
          </Link>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link">
          <Link to="/login">
          Login
          </Link>
        </a>
      </li>
    </ul>
    </div>
    </nav>
    </div>
  );
};

export default Navbar;
