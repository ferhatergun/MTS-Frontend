import { Formik } from 'formik';
import * as Yup from 'yup';

export const addMovieSchema = Yup.object().shape({
    name:Yup.string().required('Film adı zorunludur'),
    description:Yup.string().required('Film açıklama zorunludur'),
    time:Yup.string().required('Film süre zorunludur'),
    startDate:Yup.string().required('Film başlangıç tarihi zorunludur'),
    director:Yup.string().required('Film yönetmen zorunludur'),
    category:Yup.string().required('Film kategori zorunludur'),
    MovieOrSeries:Yup.string().required('Film türü zorunludur'),
    moviePhoto:Yup.mixed().required('Film resim zorunludur'),
})

export const addMovieInitialValues = (movie) => {
    return {
        name: movie?.name || '',
        description: movie?.description || '',
        time: movie?.time || '',
        startDate: movie?.startDate || '',
        director: movie?.director || '',
        category: movie?.category || '',
        MovieOrSeries: movie?.MovieOrSeries || '',
        moviePhoto: movie?.moviePhoto || '',
    };
};


