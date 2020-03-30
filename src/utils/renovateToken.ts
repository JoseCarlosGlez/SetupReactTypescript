import Axios, { AxiosResponse, AxiosError } from 'axios';



const UrlSpotify = 'http://localhost:5000/spotify/883c6f51134e497c83242ae10d0976b8/81f13615f54b4072b5d77a82c10d6ea3'

export async function renovateToken() {
    return await Axios({
        method: 'GET',
        url: UrlSpotify
    }).then((dataResponse: AxiosResponse) => {
        localStorage.setItem('token', dataResponse.data.access_token)
    }).catch((error: AxiosError) => {
        console.error(error)
    })
}