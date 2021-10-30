import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TabControl extends Component {
    render() {
        const { titles } = this.props
        return (
            <div>
                {titles.map((item, index) => {
                    return <div key={item}>{item}</div>
                })}
            </div>
        )
    }
}
