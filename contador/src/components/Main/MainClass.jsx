import React, { Component } from 'react'
import BannerClass from '../Banner/BannerClass';
import ContadorClass from '../Contador/ContadorClass';
import './Main.css'

export class MainClass extends Component {

  constructor() {
    super();
    this.state = { contador: 0 }

    this.setContador = this.setContador.bind(this)
  }

  setBackground(){
    if (this.state.contador % 2 === 0) {
      document.body.style = 'background-color: skyblue'
    } else {
      document.body.style = 'background-color: lightgreen'
    }
    document.title = `Contador: ${this.state.contador}`
  }
  
  componentDidUpdate() {
    this.setBackground()
  }

  componentDidMount() {
    this.setBackground()
  }

  setContador(contador) {
    this.setState({ ...this.state, contador: contador })
  }

  render() {
    return (
      <div className='main-container'>
        <BannerClass contador={this.state.contador} />
        <ContadorClass contador={this.state.contador} setContador={this.setContador} />
      </div>
    )
  }
}

export default MainClass
