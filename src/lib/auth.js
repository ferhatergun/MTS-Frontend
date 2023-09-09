import { getCookie } from "cookies-next"

export const isAuth=()=>{
    const user = getCookie('userId')
    if(user){
        return true
    }
    return false
}