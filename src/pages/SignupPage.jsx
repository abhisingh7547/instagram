
import React from 'react'

const css ={
    container:{
        flex:1,
        backgroundColor:"light",
        height:"100vh",
    },
    box:{
        width:"25%",
        marginTop:"35px",
        marginLeft:"450px",
        backgroundColor:"white",
        height:"650px",
        border:"1px solid lightgray"

    },
    logo:{
        width:"50%", marginLeft:"25%", marginTop:"20px", 

    },
    body:{
        padding:10,

    },
    loginHeader:{
        color:"grey", textAlign:"center", fontSize:"18,", fontWeight:600
    },
    text:{
    paddingLeft:"30px",
    paddingRight:"30px",
    textAlign:"center",
    },
    button:{
        width:"260px",
        backgroundColor:"#0095f6",
        border:"1px solid transparent",
        color:"white",
        textAlign:"center",
        height:"30px",
        fontSize:"15px",
        marginLeft:"30px",
    },
    name:{
        width:"260px", height:"30px", marginLeft:"30px", marginTop:"10px", border:"1px solid dark"
    },
    form:{
        marginTop:"30px",
    },
    font:{
        fontSize:"12px",
        margin:"20px 20px",
        textAlign:"center",
    }
}

function SignupPage() {
  return (
    <div style={css.container}>
        <div style={css.box}>
            <div style={css.body}>
                <div style={css.logo}>
                    <img src="image/instagram_logo.png" alt="" />
                </div>
            </div>
            <h4 style={css.text}>Sign up to see photos and videos from your friends.</h4>
            <button style={css.button}>Login with facebook</button>
            <form style={css.form} action="">
                <input style={css.name} type="text" placeholder='Mobile Number or Email' />
                <input style={css.name} type="text" placeholder='Full Name' />
                <input style={css.name} type="text" placeholder='Username' />
                <input style={css.name} type="password" placeholder='Password' />
            </form>
            <h3 style={css.font}>People who use our service may have uploaded your contact information to Instagram. Learn More
</h3>           
            <h3 style={css.font}>By signing up, you agree to our Terms , Data Policy and Cookies Policy .</h3>
        </div>
         
    </div>
  )
}

export default SignupPage