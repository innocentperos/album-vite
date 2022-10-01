import API from "/axios"

const ACCOUNT_NOT_FOUND = Symbol()
const PASSWORD_WRONG = Symbol()
const INVALID_REQUEST = Symbol()
const SERVER_ISSUE = Symbol()
const NETWORK_ISSUE = Symbol()

function buildResponse(success, data, error){
  return {
    success,
    data,
    error
  }
}

export async function Login(email, password){
  try{
    let response =  await API.post("auth/login/", {email, password}, {
      "content-type":"application/json"
    })
    console.log(response)
    //{email,password});
    
    if( response.status == 200){
      return buildResponse(true, response, null)
    }else{
      return buildResponse(false, response, null)
    }
    
  }catch(error){
    console.log(error)
    if(!error.response){
      return buildResponse(false,null, NETWORK_ISSUE)
    }
    
    switch(error.response.status){
      case 400:
        return buildResponse(false, error.response, INVALID_REQUEST)
        break;
      case 404:
        return buildResponse(false, error.response, ACCOUNT_NOT_FOUND)
        break;
      default:
      return buildResponse(false, error.response, SERVER_ISSUE)
      break;
    }
    
  }
}

export const Error = {
  ACCOUNT_NOT_FOUND,
  PASSWORD_WRONG,
  INVALID_REQUEST,
  SERVER_ISSUE
};
