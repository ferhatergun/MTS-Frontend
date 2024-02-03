import React ,{useEffect, useState}from 'react'
import styles from './page.module.css'
import { DataGrid ,GridToolbarContainer,
GridToolbarFilterButton,GridToolbarColumnsButton} from '@mui/x-data-grid';
import { fetchData } from '$/allApi/api';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Tooltip } from '@mui/material';
import AddMovie from '../addMovie/AddMovie';
import { Badge } from 'antd';
import { deleteMovieSeries } from '$/allApi/adminOperations';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import NotInterestedIcon from '@mui/icons-material/NotInterested';

export default function UsersTable() {
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 10,
    page: 0,
  });
  const [loading, setLoading] = useState(false)
  const [userList, setUserList] = useState([])
  const [rowSelectionModel, setRowSelectionModel] = useState([]);
  const [refresh, setRefresh] = useState(0)

  useEffect(() => {
    const fetchUsers = async () => {
      const movieList = await rows();
      setLoading(true);
      setUserList(movieList);
    };

    fetchUsers();
  }, [refresh]);

  
const customToolbar = () => {
  return (
    <GridToolbarContainer>
      <Tooltip title="Sil" followCursor placement='top'>
        <Badge count={rowSelectionModel.length} color='#0174BE' offset={[0,30]}>
        <div className={styles.deleteBtn} style={{padding:2}} 
        onClick={()=>console.log(rowSelectionModel)}>
          <DeleteOutlineIcon/>
        </div>
        </Badge>
      </Tooltip>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
    </GridToolbarContainer>
  );
}

const columns = [
  {
    field: 'UserName',
    headerName: 'Kullanıcı Adı',
    minWidth:200,
    flex:1
  },
  {
    field: 'telephone',
    headerName: 'Telefon Numarası',
    minWidth:150,
    flex:1
  },
  {
    field: 'accountHealt',
    headerName: 'Hesap Durumu',
    minWidth:200,
    renderCell:(params)=>(
      <div className={styles.accountHealt}>
        {params.row.accountHealt === true ? 
        <div className={styles.healt}>
          <NotInterestedIcon color='error' />
          Hesap Engellendi
        </div> : 
        <div className={styles.healt}>
          <CheckCircleOutlineIcon color='success' />
          Hesap Aktif
        </div>
        }
        
      </div>
    ),
    flex:1
    
  },
  {
    field: 'operations',
    headerName: 'İşlemler',
    sortable: false,
    renderCell:(params)=>(
      <div className={styles.operationsButtons}>
        <AddMovie updateMovie={params.row} 
        uploadStyle={styles.editBtn} 
        setRefresh={setRefresh} />
        
        <Tooltip title="Sil" followCursor placement='top'>
          <div className={styles.deleteBtn} 
          onClick={()=>deleteMovieSeries(params.row.id,setRefresh)}>
            <DeleteOutlineIcon/>
          </div>
        </Tooltip>

        <Tooltip title="Raporla" followCursor placement='top'>
          <div className={styles.reportUserBtn}>
            <ReportGmailerrorredIcon/>
          </div>
        </Tooltip>
      </div>
    ),
    minWidth:180,
    flex:1
  },
];


if(loading === false) return (<div>loading</div>)
  return (
    <div>
    <DataGrid
    key={refresh}
    slots={{toolbar:customToolbar}}
    autoHeight={true}
    getRowHeight={()=>90}
    sx={{
      '& .MuiDataGrid-cell': {
        height:50,
      },
      '& .MuiDataGrid-cell:focus':{
        outline:'none'
      },
      '& .MuiDataGrid-columnHeader:focus-within':{
        outline:'none'
      },
      '& .MuiDataGrid-cell:focus-within':{
        outline:'none'
      },
      overflowX:'auto'
    }}
    rows={userList}
    columns={columns}
    pageSizeOptions={[10,20,50]}
    checkboxSelection
    disableRowSelectionOnClick
    paginationModel={paginationModel}
    onPaginationModelChange={setPaginationModel}
    onRowSelectionModelChange={(newRowSelectionModel) => {
      setRowSelectionModel(newRowSelectionModel);
    }}
    rowSelectionModel={rowSelectionModel}
  
    />
    </div>
  )
}
  

  const rows = async () => {
   
  const users = await fetchData(`AdminUser/Admin/AllUsers`)

  if(users.success){
    const userList = users.allUsers.map((user) => ({
      id: user._id,
      UserName: user.UserName,
      telephone: user.telephone,
      accountHealt: user.isBanned,
    }));
    
    return userList;
    
  }
}
  
