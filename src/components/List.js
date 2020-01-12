import React from "react"

class Input extends React.Component{

    render(){
        return(
            <ul>
                {
                    this.props.todos.map((todo, index) => <li key = {index}>{todo}</li>) 
                }
            </ul>
        )
    }
}

export default Input;