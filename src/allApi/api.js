import { redirect } from 'next/navigation'

export const FRONT_URL = "http://localhost:3000"
export const BACKEND_URL = "http://localhost:5000"


export const fetchData = async (path) => {
    try{
        const res = await fetch(`${BACKEND_URL}/${path}`,{cache:'no-cache',})
        const data = await res.json()
        if(data.success){
        return data
        }
        else{
            redirect('/error')
        } 
    }catch(e){
        console.log("api getirilirken hata oluştu",e)
        redirect('/error')
    }

}

