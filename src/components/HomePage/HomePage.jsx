import React from "react";
import { NavLink } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
        Reproduza suas músicas favoritas<br /><br />
        <NavLink to="/upload"><button>Faça Upload</button></NavLink>
    </>
  );
}  

export default HomePage;