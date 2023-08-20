"use client"
import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import styles from './page.module.css'
import ReportOutlinedIcon from '@mui/icons-material/ReportOutlined';
import { Dropdown, Space } from 'antd';


export default function CommentReportButton() {

const items = [
  {
    label: <div className={styles.reportBtn}><ReportOutlinedIcon/>Rapor Et</div>,
    key: '0',
  },
];

  return (
    <>
    <Dropdown
    menu={{
      items,
    }}
    trigger={['click']}
    className={styles.reportBtn}
    >
      <Space style={styles.reportBtn}>
      <MoreVertIcon className={styles.Icon} />
      </Space>
    </Dropdown>
    </>
  )
}
