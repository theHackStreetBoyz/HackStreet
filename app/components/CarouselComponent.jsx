'use strict'

/**
 * `babel-preset-env` converts this general import into a selection of specific
 * imports needed to polyfill the currently-supported environment (as specified
 * in `.babelrc`). As of 2017-06-04, this is primarily to support async/await.
 */
import 'babel-polyfill'

import React, { Component } from 'react'
import { render } from 'react-dom'
import { Carousel } from 'react-bootstrap'

const CarouselComponent = () => (
  <Carousel>
    <Carousel.Item>
      <img width={900} height={500} alt="900x500" src="http://www.bobmarley.com/wp-content/uploads/2015/04/Alt-1WC-Cover-bmcom-900x500.jpg" />
      <Carousel.Caption>
        <h3></h3>
        <p></p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={900} height={500} alt="900x500" src="https://clients.allaccess.com/K/KYGO/900x500b.jpg" />
      <Carousel.Caption>
        <h3></h3>
        <p></p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={900} height={500} alt="900x500" src="http://s3.amazonaws.com/dostuff-production/festival_band_location/lineup_photos/53100/original479322710ce262773e928a0cc5f6b9e7.jpg?1496418956" />
      <Carousel.Caption>
        <h3></h3>
        <p></p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
)

export default CarouselComponent
