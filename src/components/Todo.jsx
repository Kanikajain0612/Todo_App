import React from 'react'
import '../App.css'

export default class Todo extends React.Component{
   state={
      editing:false, 
   }
   edit(){
        // alert("edit text")
        this.setState({editing:true})
   }
   remove(){
        // alert("Remove text")
        this.props.remove(this.props.index)
   }
   save(){
        var val = this.refs.newText.value;
        this.props.edit(val,this.props.index)
        this.setState({editing:false})
   }
   renderNormal(){
        return(
            <div className="todoBox">
                <div className="todoText">{this.props.children}</div>
                <button onClick={this.edit.bind(this)} className="editButton">Edit</button>
                <button onClick={this.remove.bind(this)} className="removeButton">Remove</button>
            </div>
        );
   }
   renderForm(){
       return(
           <div className="todoBox">
                <textarea ref="newText" defaultValue={this.props.children}></textarea><br></br>
                <button onClick={this.save.bind(this)} className="saveButton">Save</button>
           </div>
       );
   }
   render(){
        if(this.state.editing){
            return this.renderForm()
        }
        else{
            return this.renderNormal()
        }

   }
}