import React ,{useState}from 'react'

function HookConterTwo() {
   const [items,setItem] = useState([ ])
  const  addNum = ()  =>{
       setItem([...items,{
        id:items.length,
        value:Math.random()
    }])
   }
    return (
        <div>
            <button onClick={addNum}>addme</button>
           <ul>
             {
                items.map(item => (<li key={item.id}>{item.value}</li>))
             }
          </ul> 
        </div>
    )
}

export default HookConterTwo
