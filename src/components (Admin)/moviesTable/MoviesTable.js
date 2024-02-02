import React ,{useEffect, useState}from 'react'
import styles from './page.module.css'
import { DataGrid ,GridToolbar,GridToolbarContainer,
GridToolbarFilterButton,GridToolbarColumnsButton} from '@mui/x-data-grid';
import { fetchData } from '$/allApi/api';
import MovieImage from '$/components (User)/MovieImage/MovieImage';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Tooltip } from '@mui/material';
import AddMovie from '../addMovie/AddMovie';
import Link from 'next/link';
import { Badge } from 'antd';


export default function MoviesTable() {
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 10,
    page: 0,
  });
  const [loading, setLoading] = useState(false)
  const [movieList, setMovieList] = useState([])
  const [rowSelectionModel, setRowSelectionModel] = useState([]);
  console.log(rowSelectionModel)

  useEffect(() => {
    const fetchMovies = async () => {
      const movieList = await rows();
      setLoading(true);
      setMovieList(movieList);
    };

    fetchMovies();
  }, []);

  
const customToolbar = () => {
  return (
    <GridToolbarContainer>
      <Tooltip title="Sil" followCursor>
        <Badge count={rowSelectionModel.length} color='#0174BE' offset={[0,30]}>
        <div className={styles.deleteBtn} style={{padding:2}}>
          <DeleteOutlineIcon/>
        </div>
        </Badge>
      </Tooltip>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
    </GridToolbarContainer>
  );
}


if(loading === false) return (<div>loading</div>)
  return (
    <div>
    <DataGrid
    key={paginationModel.page}
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
    rows={movieList}
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

const columns = [
    {
      field: 'moviePhoto',
      headerName: 'Film Resmi',
      width:120,
      renderCell:(params)=>(
        <MovieImage photoId={params.row.moviePhoto ?? false} style={styles.movieImage} />
      ),
      
    },
    {
      field: 'name',
      headerName: 'Film Adı',
      width:200
    },
    {
      field: 'category',
      headerName: 'Film Kategorisi',
      width:150
    },
    {
      field: 'startDate',
      headerName: 'Vizyona Giriş Tarihi',
      width:200,
      renderCell:(params)=>(
        <div>{params.row.startDate.slice(0,10)}</div>
      ),
      
    },
    {
      field: 'operations',
      headerName: 'İşlemler',
      sortable: false,
      renderCell:(params)=>(
        <div className={styles.operationsButtons}>
          <Tooltip title="Düzenle" followCursor>
              <AddMovie updateMovie={params.row} uploadStyle={styles.editBtn} />
          </Tooltip>
          
          <Tooltip title="Sil" followCursor>
            <div className={styles.deleteBtn}>
              <DeleteOutlineIcon/>
            </div>
          </Tooltip>

          <Tooltip title="Filme git" followCursor>
            <Link href={`${process.env.FRONT_URL}/film/${params.row.id}`} 
            target='_blank'
            className={styles.openMovieBtn}>
              <OpenInNewIcon/>
            </Link>
          </Tooltip>
        </div>
      ),
      width:180
    },
  ];
  

  const rows = async () => {
   
  const movies = await fetchData(`AdminMovieseries/MovieSeries/AllMovieSeries`)

  if(movies.success){
    const movieList = movies.allmovieseries.map((movie) => ({
      id: movie._id,
      moviePhoto: movie.moviePhoto ?? null,  
      name: movie.name,   
      category: movie.category,
      startDate: movie.startDate,
      operations: movie._id,
      MovieOrSeries: movie.MovieOrSeries,
      director: movie.director,
      time: movie.time,
      description:movie.description,
    }));
    
    return movieList;
    
  }
}
  
