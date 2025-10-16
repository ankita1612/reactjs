import { BrowserRouter,  Routes,  Route,  Outlet,  useParams, } from 'react-router-dom';
function UserProfile() {    
     const { userId } = useParams();
     return <div>User ID: {userId} . <br /> 
     You use outlet so here first parent data will show then child data will show<br />
      if you do not use outlet in parent component then only parent data will show
     </div>
}
function UserLayout() {
  return (
    <div>
      <h1>User Section</h1>
      {/* Nested route will render here */}
      <Outlet />
    </div>
  );
}
function App() {
 return (
   <BrowserRouter>
     <Routes>
       <Route path="user/:userId" element={<UserLayout  />}>
            <Route path="profile" element={<UserProfile />} />
       </Route>
     </Routes>
   </BrowserRouter>
 );
}
export default App;

//http://localhost:5173/user/1
//http://localhost:5173/user/1/profile