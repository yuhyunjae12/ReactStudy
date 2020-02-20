import React, { Component } from 'react'

export default class Child extends Component {
    render() {
        return (
            <div>
                <div>{this.props.children}</div>
                <div>{this.props.name}</div>
            </div>
        )
    }
}
