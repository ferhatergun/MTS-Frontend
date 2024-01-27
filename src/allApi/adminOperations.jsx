import { ref ,uploadBytes } from 'firebase/storage'
import { storage } from '../firebase'


export const uploadMoviePhoto = (photoId,file) => {
    console.log(file)
    const imageRef = ref(storage, `moviePhotos/${photoId}`)
    uploadBytes(imageRef, file)
    console.log("Başarı ile yüklendi")
}

