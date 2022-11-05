import React from 'react'
import {useRef} from 'react'

function Counter() {
    const count = useRef(0)
    console.log("inside component")
    function handleClick(){
        
        count.current = count.current+1;
        console.log("inside handleclcik count", count.current)
        alert('click count:'+ count.current)
    }
  return (
    <button onClick={handleClick}>Click Me</button>
  )
}

export default Counter