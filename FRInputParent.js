import React, { Component } from 'react'
import FRInput from './FRInput'

 class FRInputParent extends Component {
     constructor(props) {
         super(props)
     
        this.inputRef=React.createRef();
        this.clickHandler=this.clickHandler.bind(this);
     }
     clickHandler()
     {
         this.inputRef.current.focus();
     }
    render() {
        return (
            <div>
              <FRInput ref={this.inputRef}></FRInput>
              <button onClick={this.clickHandler}>Focus</button>

            </div>
        )
    }
}

export default FRInputParent
