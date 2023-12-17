"use client"
import React from 'react'
import { LineChart } from '@mui/x-charts/LineChart';
import styles from './page.module.css'


export default function Admin() {
  return (
    <div className={styles.container}>
      Toplam Kullanıcı Sayısı 148
     <LineChart
       xAxis={[
        {
          id: 'Years',
          data: years,
          scaleType: 'time',
          valueFormatter: (date) => `${((date.getMonth()+1).toString())}.${(date.getFullYear().toString())}`,
        },
      ]}
      series={[
        {
          data: [2, 13, 27,58,80,148],

        },
      ]}
    /> 
    </div>
  )
}

const  years = [
  new Date(2023, 1, 1),
  new Date(2023, 2, 1),
  new Date(2023, 3, 1),
  new Date(2023, 4, 1),
  new Date(2023, 5, 1),
  new Date(2023, 6, 1),

]
