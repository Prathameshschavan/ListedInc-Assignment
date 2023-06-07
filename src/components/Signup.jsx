import React from 'react'
import {Navigate, useNavigate} from "react-router-dom"
const Signup = () => {
  const navigator = useNavigate();
  function move(event){
    event.preventDefault();
    // <navigator to={"/Dashboard"} />
    navigator("/Dashboard")
    console.log("object")
  }
  return (
    <>
    <div style={{display:'flex'}}>
      <div style={{backgroundColor:"#000", height:"100vh",width:"30%", display:"flex",justifyContent:"center",alignItems:"center"}}>
       <h1 style={{color:"#fff", fontSize:"350%"}}>Board.</h1>
      </div>
      <div style={{ width:"70%", display:"flex",justifyContent:"center",alignItems:"center", background:"#F5F5F5"}} >
            <div style={{textAlign:"left", width:"36%",}}>
                <h1 style={{marginBottom:"-15px"}}>Sign In</h1>
                <p>Sign in to your account</p>
                <div style={{display:"flex", gap:"6%", marginBottom:"5%"}}>
                    <button style={{background:"#fff",width:"180px", height:"30px",padding:"5px 7px", borderRadius:"10px",fontSize:"50%", border:"none",color:"gray"}}> <img style={{width:"10%",verticalAlign:"middle",marginBottom:"1%"}} src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" alt="" />  Sign in with Google</button>
                    <button style={{background:"#fff", width:"180px", height:"30px",padding:"5px 7px",borderRadius:"10px",fontSize:"50%",border:"none",color:"gray"}}> <img style={{width:"10%",verticalAlign:"middle",marginBottom:"3%"}} src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png" alt="" />  Sign in with Apple</button>
                </div>
                <div style={{textAlign:"left",background:"#fff",width:"385px", height:"317px",borderRadius:"20px", display:"flex",justifyContent:"center",alignItems:"center",lineHeight:"2"}}>
                    <form onSubmit={move}action="">
                        <label htmlFor="">Email address</label><br />
                        <input type="email" name="" id="" required placeholder='Enter email'/><br />
                        <label htmlFor="">Password</label><br />
                        <input type="password" name="" id="" required placeholder='Enter password'/>
                        <p style={{color:"#346BD4", margin:"0 0 5% 0"}}>Forgot password?</p>
                        <input type="submit" style={{background:"#000", color:"#fff"}} name="" id="" value="Sign In" />
                    </form>
                </div>
                <p style={{textAlign:"center"}}>Don't have an account? <a href="" style={{textDecoration:"none", color:"#346BD4"}}>Register here</a> </p>
            </div>
 
      </div>
    </div>
    </>
    
  )
}

export default Signup
