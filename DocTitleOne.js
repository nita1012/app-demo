import React ,{useEffect, useState}from 'react'
import useDocumentTitle from './useDocumentTitle';

function DocTitleOne() {
    const [count,setCount]=useState(0)
    useDocumentTitle(count)

    return (
        <div>
            <button onClick={()=>setCount(count+1)}>count1-{count}</button>
        </div>
    )
}

export default DocTitleOne
