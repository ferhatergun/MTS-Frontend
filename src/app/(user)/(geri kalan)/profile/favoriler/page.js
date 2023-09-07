import React from 'react'
import styles from './page.module.css'
import { Grid } from '@mui/material'
import ProfileFavori from '$/components/ProfleFavori/ProfileFavori'

export default function page() {
  return (
    <div className={styles.container}>
        <Grid container spacing={2} >
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
    </div>
  )
}
