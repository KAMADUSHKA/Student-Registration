import React from 'react'


export default function MainHome() {
  const goREgister = () => window.location.href = "/Register";
  const goLogin = () => window.location.href = "/Login";
  return (
    <div id='home-main'>
        <div id='start-statment'>
            <span id='first-statment'>Do What is</span><br/>
            <span id='first-statment-upercase'>RIGHT,</span><br/><br/>
            <span id='first-statment'>Not What Is</span><br/>
            <span id='first-statment-upercase'>EASY</span><br/><br/>
          </div><br/><br/>

          <div id='login-register'>
              <span id='paragrap'>Now you can easily registered quickly and faster</span><br/>
              <button id='homepage-btn' onClick={goREgister}>Register Now</button><br/><br/>
              <span id='paragrap'>For your information please login here..</span><br/>
              <button id='homepage-btn'onClick={goLogin}>Login Now</button>
          </div>
    </div>
  )
}
