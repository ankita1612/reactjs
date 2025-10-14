import React, { useEffect, useState, useLayoutEffect, useRef } from "react";

export default function Use_effect_demo() {

  const [toggle, setToggle] = useState(false);
 const textRef=useRef();

  useEffect(() => {
    if(textRef.current != null){
        const dimension = textRef.current.getBoundingClientRect()
        console.log(dimension);
    }    
    
  }, [toggle]);
  
 
//   useLayoutEffect(() => {
//     console.log("useLayoutEffect");
//   }, [toggle]);
  return (
    <>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle && <h4 ref={textRef}>Code Bless You</h4>}
    </>
  );
};
