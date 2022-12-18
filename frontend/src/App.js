import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter , Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';




function App() {
  return (
    <div>
      <BrowserRouter>
      <Header></Header>


      {/*<Link to = "/home">Home</Link>
      <Link to = "/login">Login</Link>
  <Link  to = "/register">Register</Link>*/}
          <Routes>
            <Route element = {<Home></Home>} path = "home" />
            <Route element = {   <Login></Login> } path = "login" />
            <Route element = {   <Register></Register> } path = "register" />
          
            
            
            
          </Routes>
      </BrowserRouter>
    </div>
    
      
  );
}

export default App;
