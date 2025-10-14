import React, {useEffect, useState } from 'react'
import axios from 'axios' //npm install axios


function UseEffectHook() {    
    const [data,setData] = useState([]);
    useEffect(() => {
        console.log("useEffect called");
         axios
            .get('https://jsonplaceholder.typicode.com/todos/1')
            .then(res => setData(res.data))
            .catch(err => console.error(err));

         return () => {
            console.log("cleanup");
         }   
    }, []);
    const safeData = data ? (Array.isArray(data) ? data : [data]) : [];

  return (
    <div>
        {/* https://jsonplaceholder.typicode.com/todos/ */}
        {/* {Array.isArray(data) &&
        data.map((row) => (
          <p key={row.id}>{row.title}++</p>
        ))}     */}
        [[{safeData.length}]]
        {safeData.length > 0 ? (safeData.map((row) => <p key={row.id}>{row.title}</p>)) : (<p>No data found</p>)}

        json.stringify(data) : {JSON.stringify(data)} <br />
        title: {data.title} <br />
        UseEffectHook</div>
  )
}

export default UseEffectHook