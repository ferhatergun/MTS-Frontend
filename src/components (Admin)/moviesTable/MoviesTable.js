import React ,{useEffect, useState}from 'react'
import styles from './page.module.css'
import { DataGrid ,GridToolbar} from '@mui/x-data-grid';
import { fetchData } from '$/allApi/api';
import MovieImage from '$/components (User)/MovieImage/MovieImage';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Tooltip } from '@mui/material';
import AddMovie from '../addMovie/AddMovie';

export default function MoviesTable() {
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 10,
    page: 0,
  });
  const [loading, setLoading] = useState(false)
  const [movieList, setMovieList] = useState([])

  useEffect(() => {
    const fetchMovies = async () => {
      const movieList = await rows();
      setLoading(true);
      setMovieList(movieList);
    };
    console.log("istek atıldı")

    fetchMovies();
  }, []);


if(loading === false) return (<div>loading</div>)
  return (
    <div>
    <DataGrid
    key={paginationModel.page}
      slots={{toolbar:GridToolbar}}
      autoHeight={true}
      getRowHeight={()=>90}
      sx={{
        '& .MuiDataGrid-cell': {
          height:50,
          
        },
      }}
        rows={movieList}
        columns={columns}
        pageSizeOptions={[10,20,50]}
        checkboxSelection
        disableRowSelectionOnClick
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
      />
    </div>
  )
}

const columns = [
    {
      field: 'moviePhoto',
      headerName: 'Film Resmi',
      flex:1,
      renderCell:(params)=>(
        <MovieImage photoId={params.row.moviePhoto ?? false} style={styles.movieImage} />
      ),
      
    },
    {
      field: 'name',
      headerName: 'Film Adı',
      flex:1,
      renderCell:(params)=>(
        console.log(params.row)
      ),
    },
    {
      field: 'category',
      headerName: 'Film Kategorisi',
      flex:1
    },
    {
      field: 'startDate',
      headerName: 'Vizyona Giriş Tarihi',
      flex:1,
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
            <div className={styles.openMovieBtn}>
              <OpenInNewIcon/>
            </div>
          </Tooltip>
        </div>
      ),
      flex:1
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
  
