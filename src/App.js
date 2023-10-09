import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Signup from './Signup';
import Navigation  from './Navigation';
import Logout from './Logout';
function App() {
  return (

    <Routes>
      <Route path='/' element={<Navigation />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/logout' element={<Logout />} /> 
    </Routes>
  );
}

export default App;
