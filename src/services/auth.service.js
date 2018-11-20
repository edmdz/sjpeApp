import environments from '../environments/environments.dev'

export default class AuthService{
  signUp(obj){
    return fetch(`${environments.API.URL}api/sjpe/v1/user`,{
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    })
  }
}