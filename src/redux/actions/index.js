import axios from 'axios'
import { SAVE_DATA } from '../types/index';

const API_URL = 'http://209.97.142.219:3060';


// const API_URL = 'http://localhost:3060';

export const loginApi = (data) => {
    let endPoint = 'login';
    return async dispatch => {
        return new Promise(
            (resolve, reject) =>
                axios.post(`${API_URL}/${endPoint}`, data,{
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }).then(res => {
                    console.log(res)
                    resolve(res)
                })
                .catch((error) => {
                    console.log(error)

                    reject(error)
                })
        )
    }
}

export const getData = () => {
    let endPoint = 'getData';
    return async dispatch => {
        return new Promise(
            (resolve, reject) =>
                axios.get(`${API_URL}/${endPoint}`,{
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }).then(res => {
                    console.log(res)
                    dispatch(saveData(res.data.data))
                    resolve(res)
                })
                .catch((error) => {
                    console.log(error)
                    reject(error)
                })
        )
    }
}


export const saveData = data => {
    return {
        type: SAVE_DATA,
        payload: data
    }
}
