import React, { Component } from 'react'
import './Banner.css'

export class BannerClass extends Component {
  render() {
    return (
      <div className='banner-container'>
        Contador class: {this.props.contador}
      </div>
    )
  }
}

export default BannerClass
