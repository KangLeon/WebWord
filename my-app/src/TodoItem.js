import React, { Component } from 'react';

class TodoItem extends Component {
    constructor(props){
        super(props);
        this.handleItemClick = this.handleItemClick.bind(this);
    }

    handleItemClick(){
        const { deleteFunction, index } = this.props;
        deleteFunction(index);
    }

    render() {
        const { content } = this.props;

        return <li onClick = {this.handleItemClick}>{content}</li>
    }
}

export default TodoItem;
