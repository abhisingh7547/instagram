import { Card, CardContent, Grid, } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'

const styles={
    container:{display:"flex",  backgroundColor:"#fafafa", padding:0 },
    gridcontainer:{padding:"0px 200px", mt:5},
}

const Homepage = () => {
  return (
    <>
    <Container sx={styles.container} maxWidth="xl">
        <Grid container sx={styles.gridcontainer}>
            <Grid item lg={4}>
                <img src="image/backscreen.png" width="100%" alt="mobile"></img>
            </Grid>
            <Grid item lg={6}>
                <Card sx={{width:"100%"}}>
                    <CardContent sx={{padding:"50px 100px"}}>
                        <img width="100%" src="image/instagram_logo.png" alt="" />
                    </CardContent>

                </Card>
                
            </Grid>
        </Grid>
    </Container>
    </>
  )
}

export default Homepage