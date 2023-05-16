import React from 'react';
// import * as icons from 'react-icons/ai';
// import { Link } from 'react-router-dom';
// import { sideBarData } from './NavBarData';
import { IconContext } from 'react-icons';
import '../Style/NavigationBar.css'


export default function NavigationBar() {

    const goREgister = () => window.location.href = "/Register";

    const goLogin = () => window.location.href = "/Login";
    const goHome = () => window.location.href = "/";

  return (
    <>
        <IconContext.Provider value={{color:'#fff'}}>
            <div id='navBar'>
                
                <button id='head-text' onClick={goHome}>Studant Registration Site</button>
                <div id='navButton'>        
                  <button id='button' onClick={goREgister}>Register</button>
                  <button id='button' onClick={goLogin}>Loging</button>
                </div>
            </div>

        </IconContext.Provider>
    </>
  )
}
 
