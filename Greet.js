import React from 'react'

// function Greet()
// {
//     return <h1>helooo</h1>
// }

const Greet= (props)=>{return <div><h1>{props.name}</h1>{props.children}</div>} 

export default Greet