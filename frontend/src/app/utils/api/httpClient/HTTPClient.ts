import {IHttpClient, IHttpClientRequestParameters} from "./IHTTPClientTypes"
import { AxiosError, AxiosRequestConfig, AxiosResponse} from "axios"
import axios from "axios";



export class HttpClient implements IHttpClient {
    async get<T>(requestParameters: IHttpClientRequestParameters): Promise<T> {
        const url : string = requestParameters.url;
        const options : AxiosRequestConfig ={
            method : 'GET',
            url : url
        }
        try{
            const response :AxiosResponse <T> = await axios.request(options);
            console.log(options)
            console.log(response.data)
            return response.data;
        }
        catch (e){
            const error = e as AxiosError;
            console.error(error);
            throw e;
        }
        
    }
}