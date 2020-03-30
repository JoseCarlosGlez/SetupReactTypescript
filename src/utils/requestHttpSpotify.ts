import Axios, { AxiosError } from 'axios';
import { renovateToken } from './renovateToken';
import { NewReleasesResponse } from '../interface/response.interface';











class RequestHttpSpotify {

    public UrlGlobal: string = `https://api.spotify.com/v1`



    private requestApi(query: string) {

        const token: string | null = localStorage.getItem('token')

        if (token === null) renovateToken();

        return Axios({
            method: 'GET',
            url: `${this.UrlGlobal}${query}`,
            headers: {
                Authorization: `Bearer ${token} `,

            }
        }).then(data => data)
            .catch(async (error: AxiosError) => {
                if (error.response?.status === 401) {
                    await renovateToken()
                    debugger
                    this.requestApi(query)
                }
            })


    }




    public getNewReleasesHttp() {
        return this.requestApi(`/browse/new-releases`);
    }


    public getArtistTopTracks(idArtist: string) {
        return this.requestApi(`/artists/${idArtist}/top-tracks`)
    }




}



export default new RequestHttpSpotify();