import React, { useEffect,useState } from "react";
import './style/navbar.css';
import logo from "./assets/vpu.png";
import loginImage from './assets/person.png';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("LOGIN");

useEffect(() => {
  const savedName = localStorage.getItem("userName");
  if (savedName) {
    setUserName(savedName.toUpperCase());
  }
}, []);

  return (
    <div className="header">
      <div className="logo">
        <img onClick={() => navigate('/')} src={logo} alt="React Logo" />
      </div>
      <div className="interview">
        <p onClick={() => navigate('/interview')}>Interview</p>
      </div>
      <div className="resume">
        <p onClick={() => navigate('/resume')}>Resume-Building</p>
      </div>
      
      <div onClick={() => navigate('/login')} className="login">
        <img src={loginImage} alt="loginlogo"/>
        <span id='displaynav'>{userName}</span>
      </div>
    </div>
  );
};

export default Navbar;
