import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            message:'hello'
        }
    }
    clickMe()
    {
        this.setState({
            message:'byee'
        })
    }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={()=> this.clickMe()}>click</button>
            </div>
        )
    }
}

export default EventBind
