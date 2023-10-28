"use client"
import React ,{useState,useEffect} from 'react'
import { Dropdown, Space } from 'antd';
import styles from './page.module.css'
import { Avatar } from '@mui/material';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import Link from 'next/link';
import { userLogout } from '$/allApi/AuthOperations';
import { getUser } from '$/allApi/UserOperations';
import { useRouter } from 'next/navigation';




export default function ProfileToogle({MyUserId}) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [user,setUser] = useState(null)
  const router = useRouter()


  useEffect(() => {
    // Boyut değiştiğinde bu işlev çalışacak
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [window.innerWidth]);

  useEffect(()=>{
    if(MyUserId){
      userGet()
    }
  },[])

  
  const userGet = async () => {
    const user = await getUser(MyUserId,router)
    setUser(user)
}



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
    placement={windowWidth > 1000 ? "top" : "topRight"}
    overlayClassName={styles.dropdownOverlay}
    
    
    >
      <Space>
      <Avatar>{user?.UserName.substring(0,1).toUpperCase()}</Avatar>
      </Space>
    </Dropdown>
    </>
  )
}
