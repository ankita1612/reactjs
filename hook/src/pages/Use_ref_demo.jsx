import React, { useEffect, useRef, useState } from 'react';
import { use } from 'react';
export default function   Use_ref_demo() {
    const username = useRef("ankita")
    const [name,setName] = useState(0);
    const [count,setCount] = useState(0);
    const count_with_ref = useRef(0);
    useEffect(() => {
        setCount(count + 1);    //continuously changes count and re-renders
        console.log("Render count:", count);
    });
    const handleClick = () => {        
        console.log(username); // in console u can see  properties of this
        console.log(username.current) //  username.current is current input field
        // username.current is like document.getElementById
        // we can access all properties of input field using username.current
        console.log(username.current.name)
        username.current.value ="Haii"
        console.log(username.current.textContent)
        username.current.style.width ="300px"
        username.current.focus();

        count_with_ref.current++;
        console.log("Render count:", count_with_ref.current);
    }
  return (        
    <>
    <h1>Use_ref_demo</h1>
    <input type="text" ref={username} /> <br />
    <input type="text" onChange={(e)=>setName(e.target.value)} /> <br />
    <button onClick={handleClick}>Click Me</button> <br />
    User name : {username.current?.value} <br />
    Name :{name} <br />
    Counter :{count} <br />
    Counter with useRef :{count_with_ref.current} <br />
    </>
  );
}