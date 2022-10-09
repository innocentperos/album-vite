import API from "/axios"

export async function getUser(id){
  
  try{
    let response = await API.get(`user/${id}/`)
    return response.data
  }catch(error){
    if(error.response) throw error.response.status
    throw error
    
  }
}
