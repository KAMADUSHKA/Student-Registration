import React from 'react'
import  { useState, useEffect } from 'react'
import FormatList from '../format/Format'

export default function Dboard() {
    const [details,setDetails] = useState(null)

    useEffect(() => {
      const fetchDetails = async () => {
         
          
          const search = window.location.search; // returns the URL query String
          const params = new URLSearchParams(search); 
          const emailFromURL = params.get('email');

          const res = await fetch(`/api/register/${emailFromURL}` )
          const json = await res.json()
          console.log(json)

          if (res.ok) {
            setDetails(json)
          }
      }

      fetchDetails()
    }, [])

 
      const deleteDetails = async(id) => {
        const res = await fetch(`/api/register/${id}`,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json'
            }
        })
        if (res.ok) {
          alert("Delete Successfull")
          window.location.href = "/"
        }

        if (!res.ok) {
            const data = await res.json()
            console.log(data);
        }
        
      }
    

  return (
    <div >

    <div id='main'>
      <h1 id='heading'>Your Details</h1>
    </div>
    <div >
        <fieldset id='fieldsetFormat'>
          <legend id='lgnd'><h2>Registered Customer Details</h2></legend>

        {/* {details && details.map((detail) => (
              <DetailsList key={detail._id} detail={detail}/>
        ))} */}

        {details && 
              <FormatList key={details._id} detail={details} deleteDetails = {deleteDetails}/>
        }
        
      </fieldset> 
    </div>
    
          
  </div>
   
  )
}
