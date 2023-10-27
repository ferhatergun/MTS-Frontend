import { fetchData } from "./api"



const getUser = async (userId,router) => {
    try{
        const user = await fetchData(`users/${userId}`)
        if(user.success){
            return user.user
        }
        else{
            throw new Error("user getirilirken hata oluştu")
        } 
    }
    catch(err){
        console.log("user getirilirken hata oluştu", err)
        router.push('/error')
        
    }

}

export {getUser}
