import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Signup } from './component/Signup';
import { Login } from './component/Login';
import Home from './component/Home';

function App() {
  return (
      <div className="">
    <Routes>
<Route path="/" element={<Signup />} />
<Route path="/login" element={<Login />} />
<Route path="/Home " element={<Home/>}/>
</Routes>
    </div>

  );
};
export default App

