import environments from '../environments/environments.dev'
import axios from 'axios'

export default class AuthService{
  signUp(obj){
    console.log(obj)
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