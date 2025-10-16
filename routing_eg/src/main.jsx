import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App_router_eg5_loader.jsx'
//import App from './App_router_eg5_loader';
//import App from './App_router_eg4_index_end.jsx';
//import App from './App_router_eg3' 
//import App from './App_router_eg2' 
//import App from './App_router_eg1_in_header'
//import App from './App_with_callback.jsx'
//import App from './App_with_memo.jsx'
//import App from './App_with_reducer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
