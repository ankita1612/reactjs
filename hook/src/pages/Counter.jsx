import { useState } from 'react';

export default function Counter_hook() {
  const [count, setCount] = useState(10);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [is_manager, setIs_manager] = useState(false);  
  const [isOn, setIsOn] = useState(false);
  const toggle = () => setIsOn(!isOn);




  function incr() {
    setCount(count + 1);   console.log(count); // ❗️Still logs the old value
  }

  const decr = () => setCount(prev =>prev - 1);
  return <>
    Name :<input type="text" onChange={(e)=>setName(e.target.value )} /> <br />
    Gender : 
      <input type="radio" name="gender" value="male"  onChange={(e) => setGender(e.target.value)}/>  
      <input type="radio" name="gender" value="female"  onChange={(e) => setGender(e.target.value)}/> <br />
    Is Manager : 
      <input type="checkbox" name="is_manager" value="1"  onChange={(e) => setIs_manager(e.target.checked)}/>  <br />
    Toggle<button onClick={toggle}>{isOn ? 'ON' : 'OFF'}</button>  
    
    <br />
    <button onClick={decr}>-</button>{count}<button onClick={incr}>+</button> <button onClick={() => setCount(0)}>reset</button>  
    <br></br>
    Name :{name} <br />
    Gender :{gender} <br />
    Manager: {is_manager ? "1" : "0"} <br />
    </>;
}