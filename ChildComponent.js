import React from 'react'

function ChildComponent(props) {
    return (
        <div>
           <button onClick={props.geetHandle}>click me</button> 
        </div>
    )
}

export default ChildComponent
