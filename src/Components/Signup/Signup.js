import React,{useState,useContext} from 'react';
import 'firebase/auth'
import{useHistory} from 'react-router-dom'

import Logo from '../../olx-logo.png';
import { FirebaseContext } from '../../store/Context';

import './Signup.css';


export default function Signup() {
  const history=useHistory()
  const[username,setUsername]=useState('')
  const[email,setEmail]=useState('')
  const[phone,setPhone]=useState('' )
  const[password,setPassword]=useState('')
  const {firebase}=useContext(FirebaseContext)
  const handlesubmit=(e)=>{
    console.log(username);
    console.log(firebase);
    e.preventDefault()
    console.log("reached handle submitt");
    firebase.auth().createUserWithEmailAndPassword(email,password).then((results)=>{
      console.log("added user and password handle submitt");

      results.user.updateProfile({displayName:username}).then(()=>{
        firebase.firestore().collection('users').add({
          id:results.user.uid,
          username:username,
          phone:phone
        }).then(()=>{
          console.log("dddddddddddddddddddddddddd")
           history.push('/login')
        })

      })
    })
  

  }
  
  
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handlesubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            name="phone"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}
