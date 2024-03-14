import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './routes/HomePage';
import Login from './Login';
import Signup from './Signup';


function App() {
  return (
    <div>
    <Routes>
     <Route index element={<HomePage />} />
     <Route path='/login' element={<Login />} />
     <Route path='/signup' element={<Signup />} />
    </Routes>
    </div>
  );
}

export default App;
