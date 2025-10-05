import { useContext } from 'react'; 
import { LoginContext } from '../context/LoginContextProvider';
export default function Child_component2() {    
    const { userDetails, setUserDetails } = useContext(LoginContext);

    const changeName = () => {
        setUserDetails({ ...userDetails, name: 'margini' });
    };

    return (
        <div>
        <h2>Name: {userDetails.name}</h2>
        <h3>Email: {userDetails.email}</h3>
        <button onClick={changeName}>Change Name</button>
        </div>
    );
}