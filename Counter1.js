import React, { Component } from 'react'

class Counter1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            count:0 
        }
    }
    
    incrementCount = () =>{
        //console.log(prevState)
        this.setState(prev=>{
            return {count:prev.count+1}
        })
    }
    render() {
        return (
            <div>
                {this.props.render(this.props.count,this.incrementCount)}
            </div>
        )
    }
}

export default Counter1
