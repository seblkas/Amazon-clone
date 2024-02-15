import React, { useState,useContext } from "react";
import classes from "./Signup.module.css"
import { Link } from "react-router-dom"
import {auth} from "../../Utility/firebase"
import { signInWithEmailAndPassword,createUserWithEmailAndPassword } from "firebase/auth";
import {DataContext} from "../../Components/DataProvider/DataProvider"
import { Type } from "../../Utility/action.type";

function Auth() {
  const [email, setEmail] =useState("");
  const [password,setPassword] =useState("");
  const [error, setError] =useState("");
  const[{user},dispatch] = useContext(DataContext)
  console.log(user);

  const authHandler =async (e)=>{
    e.preventDefault();
    console.log(e.target.name);
   if (e.target.name == "signIn"){

       signInWithEmailAndPassword(auth,email,password).then((userInfo)=>{
        // console.log (userInfo);
         dispatch({
          type: Type.SET_USER,
           user:userInfo.user
         })
       }).catch((err)=>{
        console.log(err)
       })

   }else{
    createUserWithEmailAndPassword(auth, email,password).then((userInfo)=>{
      // console.log(userInfo);
      dispatch({
        type: Type.SET_USER,
        user: userInfo.user 
      })

    })
    .catch((err)=>{
      console.log(err);
    })

   }
  }

  // console.log(password,email);
  return(
  <section className={classes.login}>
    <Link>
    <img
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt=""/>

    </Link>
    <div className={classes.login_container}> 
      <h1>Sign In</h1>
      <form action="">
        <div >
          <label htmlFor="email">Email</label>
          <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email"id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" id="password" />
        </div>
        <button type="submit" onClick={authHandler} 
        name="signIn" className={classes.login_signInButton}>Sign In</button>
        
      </form>
      <p>
        By signing-in you agree to the AMAZON FAKE CLONE conditions of use & sale. Please see our privacy Notice, our cookies Notice and our Interest-BasedAds Notice.
      </p>
      <button type="submit" name="signUp" onClick={authHandler} className={classes.login_registerButton}>Create your Amazon</button>
    </div>
  </section>
    
  );
}
export default Auth;