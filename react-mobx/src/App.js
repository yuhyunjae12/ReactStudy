import React, { Component } from 'react'
import Counter from './components/Counter'
import SuperMarket from './components/SuperMarket'

export default class App extends Component {
  render() {
    return (
      <div>
        <Counter/>
        <hr/>
        <SuperMarket/>
      </div>
    )
  }
}
