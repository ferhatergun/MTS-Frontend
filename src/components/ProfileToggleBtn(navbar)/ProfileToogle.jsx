"use client"
import React from 'react'
import { Dropdown, Space } from 'antd';
import styles from './page.module.css'
import { Avatar } from '@mui/material';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import Link from 'next/link';
import { userLogout } from '$/utils/AuthOperations';



export default function ProfileToogle({MyUserId}) {


const items = [
  {
    label: <Link className={styles.reportBtn} href={`/profile/${MyUserId}/yorumlar`}><PersonOutlinedIcon/>Profilim</Link>,
    key: '0',
  },
  {
    type: 'divider',
  },
  {
    label: <Link className={styles.reportBtn} href={`/profile/${MyUserId}/ayarlar`}><SettingsOutlinedIcon/>Ayarlar</Link>,
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: <div className={styles.reportBtn} onClick={()=>userLogout()}><LogoutOutlinedIcon/>Çıkış Yap</div>,
    key: '2',
  },
];

  return (
    <>
    <Dropdown
    menu={{
      items,
    }}
    trigger={['hover']}
    className={styles.dropdown}
    placement='topCenter'
    overlayClassName={styles.dropdownOverlay}
    
    
    >
      <Space>
      {/* <MoreVertIcon className={styles.Icon} /> */}
      <Avatar>A</Avatar>
      </Space>
    </Dropdown>
    </>
  )
}
