import React, { useState,useEffect } from 'react'

function ErrorBoundriesEg() {
    console.log("ErrorBoundriesEg Rendered")
    const [cntr1,setCntr1] = useState(1);
    const [cntr2,setCntr2] = useState(1);
    const [cntr3,setCntr3] = useState(1);
    const handleClick1 = () => {
        setCntr1(prev => {      
            const newValue = prev + 1;
            if(newValue>3){
                throw new Error("Counter 1 is greater than 3");
            }
            return newValue;  
        });
    }
    const handleClick2 = () => {
       setCntr2((prev) => {console.log("==>"+prev ); return prev + 1;});
    }
    const handleClick3 = () => {
       setCntr3((prev) => {console.log("==>"+prev ); return prev + 1;});
    }
    if(cntr3>3)
    {
       throw new Error("Counter 1 is greater than 3"); 
    }
    useEffect(() => {
    console.log("A counter was updated!", { cntr1, cntr2, cntr3 });
  }, [cntr1, cntr2, cntr3]);
  useEffect(() => {
    console.log("A counter was updated!", { cntr1, cntr2, cntr3 });
  }, [cntr1, cntr2, cntr3]);
  
  return (
    <>
        <div>ErrorBoundriesEg</div>
        <button onClick={handleClick1}>Click Me --{cntr1}--</button> | {" "}
        <button onClick={handleClick2}>Click Me --{cntr2}--</button> {" | "}
        <button onClick={handleClick3}>Click Me --{cntr3}--</button> 
    </>
  )
}
function ErrorBoundriesEg1() {
    console.log("ErrorBoundriesEg Rendered")
    const [cntr1,setCntr1] = useState(0);
    const [cntr2,setCntr2] = useState(0);
    const [cntr3,setCntr3] = useState(0);
    const handleClick1 = () => {        
        setCntr1(cntr1 + 1)
    }
    const handleClick2 = () => {
        setCntr2(cntr2 + 1)
    }
    const handleClick3 = () => {
        setCntr3(cntr3 + 1)
    }

    useEffect(() => {
        setCntr1(cntr1 + 1)  
    }, [cntr1]);

    useEffect(() => {
        setCntr2(cntr2 + 1)  
    }, [cntr2]);
  
    useEffect(() => {
        setCntr3(cntr3 + 1)  
    }, [cntr3]);

   return (
    <>
        <div>ErrorBoundriesEg</div>
        <button onClick={handleClick1}>Click Me --{cntr1}--</button> | {" "}
        <button onClick={handleClick2}>Click Me --{cntr2}--</button> {" | "}
        <button onClick={handleClick3}>Click Me --{cntr3}--</button> 
    </>
  )
}
export default ErrorBoundriesEg