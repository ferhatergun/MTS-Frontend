"use client"
import React ,{useState,useEffect}from 'react'
import styles from './page.module.css'
import { Grid } from '@mui/material'
import ProfileFavori from '$/components/ProfleFavori/ProfileFavori'
import {Skeleton} from '@mui/material'

export default function page() {
    const [loading,setLoading] = useState(false)
    useEffect(()=>{
        setLoading(true)
    },[])
  return (
    <div className={styles.container}>
        {
            loading ?
            <Grid container spacing={2} style={{display:'flex',justifyContent: 'center',}}>
                <Grid item lg={2.2} md={3} xs={4}>
                    <ProfileFavori />
                </Grid>
                <Grid item lg={2.2} md={3} xs={4}>
                    <ProfileFavori />
                </Grid>
                <Grid item lg={2.2} md={3} xs={4}>
                    <ProfileFavori />
                </Grid>
                <Grid item lg={2.2} md={3} xs={4}>
                    <ProfileFavori />
                </Grid>
                <Grid item lg={2.2} md={3} xs={4}>
                    <ProfileFavori />
                </Grid>
                <Grid item lg={2.2} md={3} xs={4}>
                    <ProfileFavori />
                </Grid>
                <Grid item lg={2.2} md={3} xs={4}>
                    <ProfileFavori />
                </Grid>
                <Grid item lg={2.2} md={3} xs={4}>
                    <ProfileFavori />
                </Grid>
                <Grid item lg={2.2} md={3} xs={4}>
                    <ProfileFavori />
                </Grid>
            </Grid> 
        :
            <Grid container spacing={2} style={{display:'flex',justifyContent: 'center',}}>
                <Grid item lg={2.2} md={3} xs={4}>
                    <Skeleton animation="wave" height="200px" width="100%" variant='rectangular' style={{borderRadius:20}}/>
                </Grid>
                <Grid item lg={2.2} md={3} xs={4}>
                    <Skeleton animation="wave" height="200px" width="100%" variant='rectangular' style={{borderRadius:20}}/>
                </Grid>
                <Grid item lg={2.2} md={3} xs={4}>
                    <Skeleton animation="wave" height="200px" width="100%" variant='rectangular' style={{borderRadius:20}}/>
                </Grid>
                <Grid item lg={2.2} md={3} xs={4}>
                    <Skeleton animation="wave" height="200px" width="100%" variant='rectangular' style={{borderRadius:20}}/>
                </Grid>
                <Grid item lg={2.2} md={3} xs={4}>
                    <Skeleton animation="wave" height="200px" width="100%" variant='rectangular' style={{borderRadius:20}}/>
                </Grid>
                <Grid item lg={2.2} md={3} xs={4}>
                    <Skeleton animation="wave" height="200px" width="100%" variant='rectangular' style={{borderRadius:20}}/>
                </Grid>
                <Grid item lg={2.2} md={3} xs={4}>
                    <Skeleton animation="wave" height="200px" width="100%" variant='rectangular' style={{borderRadius:20}}/>
                </Grid>
                <Grid item lg={2.2} md={3} xs={4}>
                    <Skeleton animation="wave" height="200px" width="100%" variant='rectangular' style={{borderRadius:20}}/>
                </Grid>
                <Grid item lg={2.2} md={3} xs={4}>
                    <Skeleton animation="wave" height="200px" width="100%" variant='rectangular' style={{borderRadius:20}}/>
                </Grid>
            </Grid>
        }
    </div>
  )
}
