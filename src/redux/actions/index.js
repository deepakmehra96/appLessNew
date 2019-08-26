import { UPDATE_DUMMY_TEXT } from '../types/dummy'
import { actionCreatorUtil } from '../../utils/common';
import axios from 'axios'

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


export const updateDummyText = actionCreatorUtil(UPDATE_DUMMY_TEXT)