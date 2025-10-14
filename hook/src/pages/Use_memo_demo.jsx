import { useState, useMemo } from 'react';

const users = [
  { id: 1, name: 'Sudheer' },
  { id: 2, name: 'Brendon' },
  { id: 3, name: 'Charlie' },
  { id: 4, name: 'Dary' },
  { id: 5, name: 'Eden' }
];

export default function Use_memo_demo() {
  const [searchTerm, setSearchTerm] = useState('');
  const [counter, setCounter] = useState(0);

  const filteredUsers = useMemo(() => {
    console.log("Filtering users...");
    return users.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);
  //Then React will only re-run the function inside useMemo when the dependency (searchTerm) changes.

  return (
    <div>
      <h3>USE MEMO</h3>  
      <h2>Counter: {counter}</h2>
      <button onClick={() => setCounter(prev => prev + 1)}>Increment Counter</button>

      <h2>Search Users</h2>
      <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Enter name" />

      <ul>{filteredUsers.map(user => (<li key={user.id}>{user.name}</li>))}</ul>
      <h3>USE MEMO END</h3>  
    </div>
  );
}
