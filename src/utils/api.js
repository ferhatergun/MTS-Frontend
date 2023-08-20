export const getMovie=async(keyword)=>{
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${keyword}`)
    const result =  await response.json()
    return result
}