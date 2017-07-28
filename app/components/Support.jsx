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

const Support = (props) => {

    return (
      <div>
        <h3>Support</h3>

        NO REFUND, NO EXCHANGE, NEXT!

      </div>
    );
}

export default Support;
