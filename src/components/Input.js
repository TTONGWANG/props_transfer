import React from "react"

class Input extends React.Component{

    constructor(props){
        super(props);
        this.add = this.add.bind(this);
    }
    add(){
        const todo = this.todoInput.value.trim()
        if(!todo){
            return
        }
        this.props.addTodo(todo)
        this.todoInput.value = ''
    }

    render(){
        return(
            <>
                <input type = "text" ref = {input => this.todoInput = input}></input>
                <button onClick = {this.add}>add #{this.props.counts}</button>
            </>
        )
    }
}

export default Input;