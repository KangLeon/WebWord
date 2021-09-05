import React,{ Component, Fragment } from 'react';
class Counter extends Component {

    constructor(props) {
        super(props);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.state = {
            counter: 1
        }
    }

    handleBtnClick() {
        const newCounter = this.state.counter + 1;
        this.setState(()=>{
            return {
                counter: newCounter
            }
        },()=>{
            console.log(this.divElem.innerHTML);
        })
    }

    render() {
        return (
            <Fragment>
                <button 
                    onClick = {this.handleBtnClick}
                    ref = {(button) => {this.butonElem = button}}
                    >
                        增加
                    </button>
                <div ref={(div)=>{this.divElem=div}}>{this.state.counter}</div>
            </Fragment>
        )
    }
}

export default Counter;