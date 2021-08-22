import style from "./index.module.css";
import React, {useState} from "react";
import SignIn from "./signIn";
import Register from "./register";
import ForgotPassword from "./forgotPassword";

export default function AuthMenu(props) {
    const [forgotPassword,setForgotPassword]= useState(false);
    const [register,setRegister]=useState(false);
    const [signin,setSignin]=useState(true);
    let expand ={ width:"100%",height:"auto",transition:"0.4s"}
    let collapse={maxWidth:0,height:0,transition:"0.4s"}
    const handleRegister=()=>{
        setForgotPassword(false);
        setSignin(false);
        setRegister(true);
    }
    const handleForgotPassword=()=>{
        setForgotPassword(true);
        setSignin(false);
        setRegister(false);
    }
    const handleSigin=()=>{
        setForgotPassword(false);
        setSignin(true);
        setRegister(false);
    }

    return (
       <>
           <div style={{display:"flex",flexDirection:'row',overflow:'hidden',marginLeft:'1em',marginTop:"1.0em",width:"86%"}}>
               {register?<Register style={register?expand:collapse} setSignin={handleSigin}/>:<></>}
               {signin?<SignIn style={signin ? expand : collapse} setForgotPassword={handleForgotPassword}
                        setRegister={handleRegister}/>:<></>}
               {forgotPassword?<ForgotPassword style={forgotPassword ? expand : collapse} setSignin={handleSigin}/>:<></>}
            </div>
       </>
    );
}
