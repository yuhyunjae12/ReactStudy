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

//https://velog.io/@velopert/MobX-3-%EC%8B%AC%ED%99%94%EC%A0%81%EC%9D%B8-%EC%82%AC%EC%9A%A9-%EB%B0%8F-%EC%B5%9C%EC%A0%81%ED%99%94-%EB%B0%A9%EB%B2%95-tnjltay61n