'use strict'

/**
 * `babel-preset-env` converts this general import into a selection of specific
 * imports needed to polyfill the currently-supported environment (as specified
 * in `.babelrc`). As of 2017-06-04, this is primarily to support async/await.
 */
import 'babel-polyfill'

import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider, connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import CompanyInfo from './CompanyInfo'
import Support from './Support'

const Footer = (props) => (
  <div>
    <div className="row">
      <footer className="footer">
        <div className="container">
          <div className="col-sm-4">
            <NavLink to="/CompanyInfo">
              CompanyInfo
            </NavLink>
          </div>
          <div className="col-sm-4">
            <NavLink to="/Support">
              Support
          </NavLink>
          </div>
        </div>
      </footer>
    </div>
  </div>
)

export default Footer
