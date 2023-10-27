import { redirect } from 'next/navigation'

export const getMovie=async(keyword)=>{
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${keyword}`)
    const result =  await response.json()
    return result
}

export const fetchData = async (path) => {
    try{
        const res = await fetch(`http://localhost:5000/${path}`,{cache:'no-cache',})
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

