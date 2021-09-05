import React, { Component, Fragment } from 'react';
import './style.css';
import TodoItem from './TodoItem';

class TodoList extends Component {
    //构造器
    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.handleItemClick = this.handleItemClick.bind(this);

        this.state = {
            inputValue: '',
            list: []
        }
    }

    handleInputChange(e) {
        console.log(e.target.value);
        this.setState({
            inputValue: e.target.value
        })
    }

    handleKeyUp(e){
        if(e.keyCode === 13 && e.target.value !== ''){
            const list = [...this.state.list,this.state.inputValue];
            this.setState({
                list,
                inputValue: ""
            })
        }
    }

    handleItemClick(index){
        const list = [...this.state.list];
        list.splice(index,1);
        this.setState({list});
    }

    getListItems(){
        return this.state.list.map((value,index) => {
            return <TodoItem 
            content = {value} 
            index = {index}
            key = {index}
            deleteFunction={this.handleItemClick}
            />
        })
    }

    render() {
        return (
             <Fragment>
                 {/* 这是一个label */}
                 <label htmlFor = 'myinput'>请输入内容：</label>
                 <input 
                 id = 'myinput'
                 className = 'input'
                 value = {this.state.inputValue}
                 onChange = {this.handleInputChange}
                 onKeyUp={this.handleKeyUp}
                 />
             <ul>
                 {
                     this.getListItems()
                 }
             </ul>
             </Fragment>
        );
    }
}

export default TodoList;