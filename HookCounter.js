import React ,{ useState } from  'react'

function HookCounter() {
    const [name, setName] = useState({firseName:'',lastName:''})
    return (
        <div>
            <form>
            <input  
            type="text" 
            value={name.firseName} 
            onChange={e => setName({...name,firseName:e.target.value})}/>
            <input  
            type="text" 
            value={name.lastName} onChange={e => setName({...name,lastName:e.target.value})}/>

            </form>
          <h2>{name.firseName}</h2>
          <h2>{name.lastName}</h2>
        </div>
    )
}

export default HookCounter
