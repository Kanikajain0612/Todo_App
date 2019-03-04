import React from 'react'
import Todo from './Todo'
import '../App.css'

export default class List extends React.Component{
    state = {
        task : [
            'this is first',
            'this is second',
            'this is third'
            ]    
    }
    editTask(newText, i){
        var arr = this.state.task;
        arr[i] = newText;
        this.setState({task:arr}) 
    }
    removeTask(i){
        var arr = this.state.task;
        arr.splice(i,1)
        this.setState({task:arr});
    }
    addNew(text){
        var arr = this.state.task;
        arr.push(text)
        this.setState({task:arr})
    }
    eachTask(text,i){
        return(
            <Todo key={i} index={i} edit={this.editTask.bind(this)} remove={this.removeTask.bind(this)}>
                {text}
            </Todo>
        )
    }
    render(){
        return(
            <div className="todoContainer">
                <button onClick={this.addNew.bind(this, 'Default Text')} className="addButton">Add New</button>
                {
                    this.state.task.map(this.eachTask.bind(this))
                }
            </div>
        );
    }
}