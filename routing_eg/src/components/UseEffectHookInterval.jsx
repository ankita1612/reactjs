import React, { useState, useEffect } from 'react'


function UseEffectHookInterval() {
    const [second1, setSecond1]=useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setSecond1((prevSecond) => prevSecond + 1);
        }, 1000);       
        
        return () => clearInterval(intervalId);
    }   , []);  

  return (
    <div>{second1}</div>
  )
}

export default UseEffectHookInterval