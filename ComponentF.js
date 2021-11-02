import React, { Component } from 'react'
import { UserConsumer } from './UserContext'
import UserContext from './UserContext'

class ComponentF extends Component {
    static contextType=UserContext
    render(){
       
        return (
            <UserContext.Consumer>
                {
                    (username)=>{
                        return <div>{username}</div>
                    }
                }
            </UserContext.Consumer>
            
        )
    }
    
}

export default ComponentF
