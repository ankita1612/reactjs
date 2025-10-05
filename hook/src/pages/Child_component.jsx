import { useContext } from 'react'; 
import { ThemeContext } from '../App';
export default function Child_component() {    
    const theme = useContext(ThemeContext); 
    return <p>Current Theme: {theme}</p>;   
}