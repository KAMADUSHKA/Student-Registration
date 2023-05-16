import React from 'react'
import '../Style/REgister.css'
import { useState } from 'react'
import { Route } from 'react-router-dom'


export default function Register() {

    const [fname,setNamef] = useState('')
    const [lname,setNamel] = useState('')
    const [mnumber,setPhone] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    //add contact
    const addContact = async()=>{
        try {
        
            const res = await fetch('/api/register',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({fname,lname,mnumber,email,password})
            })
            const data = await res.json()
            if (!res.ok) {
                const {error} = data;
                throw Error(error)
            }
            alert("Now you are registered");
            if (res.ok) window.location.href = "/Login"

            
        } catch (error) {
            console.log(error);
            
        }
    }

  return (
   <>
         <div id='main'>
                <p id='heading'>Welcome to Registration</p>
            <fieldset id='fieldset'>
                <legend id='lgnd'><h2>User Registration Form</h2></legend>
            <div >
                <div >
                    <input type='text'id='inputf' value={fname} onInput={e=>setNamef(e.target.value)} placeholder='Enter Your First Name' /><br/><br/>
                    <input type='text' id='inputf'value={lname} onInput={e=>setNamel(e.target.value)} placeholder='Enter Your Last Name' /><br/><br/>
                    <input type='tel' id='inputf'value={mnumber} onInput={e=>setPhone(e.target.value)} placeholder='Enter Your Mobile Number' /><br/><br/>
                    <input type='email'id='inputf' value={email} onInput={e=>setEmail(e.target.value)} placeholder='Enter Your E-mail ' /><br/><br/>
                    <input type='password' id='inputf'value={password} onInput={e=>setPassword(e.target.value)} placeholder='Enter Your Password ' /><br/><br/>
                </div>
            <div>
                <button id='btn' onClick={addContact}>Enter to Register</button>
            </div>
            <br/>
            </div >
                <div id='loginLink'>
                    if you are registered 
                    <a href='./Login'>  click this</a>
                </div>
            </fieldset>
        
        
    </div>
   </>
  )
}

