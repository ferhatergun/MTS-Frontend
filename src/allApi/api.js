import { redirect } from 'next/navigation'


export const fetchData = async (path) => {
    try{
        const res = await fetch(`${process.env.BACKEND_URL}/${path}`,{cache:'no-cache',})
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

