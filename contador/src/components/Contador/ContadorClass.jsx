import React, { Component } from 'react'
import './Contador.css'

export class ContadorClass extends Component {

  constructor() {
    super();
    this.state = { estado: true };

  }

  componentDidUpdate() {
    // console.log(this.state.estado)
    document.title = `Estado: ${this.state.estado}`
  }

  decrementar = () => {
    this.props.setContador(this.props.contador - 1)
  }

  incrementar = () => {
    this.props.setContador(this.props.contador + 1)
  }

  toggle = () => {
    this.setState({ ...this.state, estado: !this.state.estado })
  }


  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', gap: '30px' }}>
        <div className='contador-container'>
          <button className='contador-btn' onClick={this.decrementar}>
            -
          </button>
          <span className='contador-span'>
            {this.props.contador}
          </span>
          <button className='contador-btn' onClick={this.incrementar}>
            +
          </button>
        </div>
        <button onClick={this.toggle}
          style={this.state.estado ? { backgroundColor: 'lightblue' } : { backgroundColor: 'lightcoral' }}>
          Estado: {String(this.state.estado)}
        </button>
      </div>
    )
  }
}

export default ContadorClass