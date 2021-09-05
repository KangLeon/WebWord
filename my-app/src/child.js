import React,{ Component, Fragment } from 'react';

class Child extends Component {
    render() {
        return (
            <div>{this.props.number}</div>
        )
    }
}

export default Child;