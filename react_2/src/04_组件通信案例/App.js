import React, { Component } from 'react'
import TabControl from './TabControl'

export default class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentTitle: '新款',
        }
    }

    render() {
        const { currentTitle } = this.state
        return (
            <div>
                <TabControl
                    itemClick={(index) => this.itemClick(index)}
                    titles={['新款', '精选', '流行']}
                />
                <h2>{currentTitle}</h2>
            </div>
        )
    }

    itemClick(index) {
        const titles = ['新款', '精选', '流行']
        this.setState({
            currentTitle: titles[index],
        })
    }
}
