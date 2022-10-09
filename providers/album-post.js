import API from "/axios"


export async function getPosts(){
  
  try{
    let response = await API.get("album-post/")
    return response.data
  }catch(error){
    console.error(error)
    console.log({
      message:"Error getting posts",
      error:error
    })
    
    if(error.response) throw error.response.status 
    
    throw error
  }
}
