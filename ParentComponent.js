import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'parent'
        }
        this.greetMethod=this.greetMethod.bind(this);
    }
     greetMethod()
     {
         console.log(`hello ${this.state.name}`)
     }
    
    render() {
        return (
            <div>
               <ChildComponent geetHandle={this.greetMethod}/> 
            </div>
        )
    }
}

export default ParentComponent
