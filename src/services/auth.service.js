import environments from '../environments/environments.dev'
import axios from 'axios'

export default class AuthService{
  signUp(obj){
    return axios({
      url: `${environments.API.URL}api/sjpe/v1/user`,
      method: 'post',
      data: obj
    })
  }
}