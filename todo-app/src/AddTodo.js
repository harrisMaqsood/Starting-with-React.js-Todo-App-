import React, {Component} from 'react';

class AddTodo extends Component{
    state = {
        content: ''
    }
    handleChange = (e) =>{
        this.setState({
            content: e.target.value
        });
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.addTodo(this.state);
        document.getElementById('todoInput').value='';
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="addTodo">Add New Todo</label>
                    <input type="text" id='todoInput' onChange={this.handleChange} autoComplete='off'/>
                </form>
            </div>
        )
    }
}

export default AddTodo;