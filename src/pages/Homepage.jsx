import { Button, Card, CardContent, Divider, Grid, Paper, TextField, Typography, } from '@mui/material'
import { Container } from '@mui/system'
import React, { useEffect, useState } from 'react'

const styles= {
    container:{display:"flex",  backgroundColor:"#fafafa", padding:0 },
    gridcontainer:{padding:"0px 200px", mt:5},
    mobileBg:{
        backgroundColorSize:"cover",
        backgroundColor:"transparent",
        backgroundImage:"url('image/backscreen.png')",
        width:"100%",
        height:"600px"},

        slider:{
            margin:"30px 0 0 113px",
            position:"relative", 
        },

        screenshot:{
            height:"535px",
            left:40,
            position:"absolute",
            top:30,
            width:"300"
        }

    }


const Homepage = () => {
    // step 1
    const images =["screen1.png","screen2.png","screen3.png"]

    // step - 2

    const [counter, setCounter] = useState(0)
    // step - 3 

    useEffect(() =>{
        const internalData = setInterval(() =>{
            counter =(counter ==2) ? setCounter(0) : setCounter(counter+1)
        },2000)

        return () => clearInterval(internalData)
    },[counter])
  return (
    <>
    <Container sx={styles.container} maxWidth="xl">
        <Grid container sx={styles.gridcontainer}>
            <Grid item lg={6}>
                <Paper elevation={0} sx={styles.mobileBg}>
                    <div style={styles.slider}>
                        {/* step- 4 */}
                        <img src={`image/${images[counter]}`} style={styles.screenshot}  alt="mobile"/>
                    </div>
                </Paper>
            </Grid>
            <Grid item lg={6}>
                <Card sx={{width:"100%"}}>
                    <CardContent sx={{padding:"50px 100px"}}>
                        <img width="100%" src="image/instagram_logo.png" alt="" />
                    </CardContent>
                    <CardContent sx={{px:6}}>
                        <TextField fullWidth="xl" InputProps={{disableUnderline:true}} size="small" id="filled-basic" label="Email,Phone Number, UserName" variant="filled"/>
                        <TextField fullWidth="xl" sx={{marginTop:1}} Inputprops={{disableUnderline:true}} size="small"  id="filled-basic" label="Pssword" variant="filled"/>
                        <Button fullWidth sx={{mt:1}} color="primary" variant="contained">Login</Button>

                        <Divider sx={{color:"#202020", mt:2}}>OR</Divider>
                        <div style={{width:"100%",textAlign:'center',display:"flex", flexDirection:"column"}}>
                            <Button variant='text'>Login With faceBook</Button>
                            <Button variant='text' sx={{fontSize:10,color:"gray"}}>Forget Password</Button>
                        </div>
                    </CardContent>
                </Card>
                <Card sx={{mt:2, pb:0}}>
                    <CardContent sx={{displat:"flex",flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
                        <Typography>Don't have an account ?</Typography>
                        <Button variant="text" sx={{fontSize:10, color:"blue"}}>Signup</Button>
                    </CardContent>
                </Card>
                <div style={{width:"100", textAlign:"center", marginTop:20,marginBottom:10}}>
                    <Typography>get the App</Typography>
                    <Grid container spacing={5}>
                        <Grid item lg={6}>
                            <img src="image/appstore.png" width="100%" alt="" />
                        </Grid>
                        <Grid item lg={6}>
                            <img src="image/googleplay.png" width="100%" alt="" />
                        </Grid>
                    </Grid>
                </div>
            </Grid>
        </Grid>
    </Container>
    </>
  )
}

export default Homepage