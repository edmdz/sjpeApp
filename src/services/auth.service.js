import environments from '../environments/environments.dev'
import axios from 'axios'

export default class AuthService{
  signUp(obj){
    return fetch(`${environments.API.URL}api/sjpe/v1/user`,{
      method: 'post',
      body: obj
    })
  }
}