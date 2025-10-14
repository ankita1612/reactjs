import React, { useEffect, useRef } from 'react'

function UseRefDemo() {
    const first=useRef(null);
    const handleClick = () =>{        
        console.log(first);
        first.current.focus();
    }

  return (
    <div>
        <input ref={first} type="text" />
        <button onClick={handleClick}>Focus Input</button>
    </div>
  )
}

export default UseRefDemo