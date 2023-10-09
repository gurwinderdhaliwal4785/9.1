import Input from "./Input"
import { useState } from "react"
import {Link, useNavigate} from 'react-router-dom'
import './Login.css';
import {signInWithGooglePopup,createuserdocfromAuth,userDocRef, signinAuthUserWithEmailAndPassword} from './utils/firebase'

function Logout() {
   const home = useNavigate()
   const userlogGoogle = async() =>
   {
    const {user} =await signInWithGooglePopup()
    const userDocRef= await createuserdocfromAuth(user)
   }

  const [contact, setcontact] =useState({
    email:'',
    password:''
  })
   const {email,password}= contact
   console.log(contact)
   async function handleClick(event)
  {
  
    try{
    const response = await signinAuthUserWithEmailAndPassword(email,password)
    home ('/')
    console.log(response)
    } 
    catch(error){
    console.log('error in login', error.message)
    }
  }

   function handlepass(event)
  {
    const value =event.target.value
    const name =event.target.name
    
     setcontact( (prevalue)=>
     {
      return{
        ...prevalue,
        [name]:value

    }
     })

  }
  return (
    <div className="header">
     
      <Input
        name = 'email'
        type='email'
        placeholder='Your Email'
        onChange ={handlepass}

      />
      <br></br>
      <Input
        name= 'password'
        type='password'
        placeholder='Password'
        onChange ={handlepass}
        />
      <br></br>
      <button className="button2" onClick={handleClick}>
        Signout
      </button>
      <br></br>
<button className="button2" onClick ={userlogGoogle}>
  Login with Google
  </button>      
      
      <br></br>

<br>
</br>
      <Link to= '/signup'>
        Signup Instead
      </Link>

    </div>
)}
export default Logout