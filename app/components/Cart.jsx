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
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'



export default class Cart extends Component {
    constructor(props){
        super(props);
    }

    addQuantity(){
     // increases quantity individually
    }

    removeQuantity(){
        //removes quantity one at a time, and removes the whole item if it hits 0
    }

    render (){
        let items = this.props.items;
        let total = 0;
       return (
           <div>
               <h1>This is Cart</h1>
               <div>
                   <ul>
                        items.map(item => {
                            total += item.price
                            return (
                                <li>
                                    <h3>{item.name}</h3>
                                    <h4>{item.price}</h4>
                                    {/*the quanity of the item is missing*/}
                                    <button onClick={addQuantity}>+</button>
                                    <button onClick={removeQuantity}>-</button>
                                </li>
                            )
                        })
                    <ul>
               </div>
               <div>
                   <h3>Total cost: {total}</h3>
               </div>
           </div>
       )
   }
}


{/*
// lists of items added
// add/remove buttons on each item
// checkout button that leads to a payment page
// sum or total cost of all items added together
// this.props.items need to be passed into
*/}
