import logo from "./logo.svg"
import "./App.css"
import Home from "./components/Home"
import Login from "./components/Login"
import Register from "./components/Register"
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom"
import Header from "./components/Header"
import Track from "./components/Track"
import AddIssue from "./components/AddIssue"
import {Toaster} from 'react-hot-toast';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Toaster />
        <Header></Header>
        <Routes>
          <Route element={<Navigate to="/login" />} path="/" />
          <Route element={<Home></Home>} path="home" />
          <Route element={<Login></Login>} path="login" />
          <Route element={<Register></Register>} path="register" />
          <Route element={<Track />} path="track" />
          <Route element={<AddIssue />} path="addissue" />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
