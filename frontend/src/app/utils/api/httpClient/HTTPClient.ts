import {IHttpClient, IHttpClientRequestParameters} from "./IHTTPClientTypes"
import { AxiosError, AxiosRequestConfig, AxiosResponse} from "axios"
import axios from "axios";
import { HTTP } from "./IHTTPClientTypes"




export class HttpClient implements IHttpClient {
    async makeRequest<T, S = void> (requestParameters: IHttpClientRequestParameters<S>): Promise<T>{ 

        const url : string = requestParameters.url;

        let method : string = 'GET';
        let verb : HTTP = requestParameters.verb;
        let options : AxiosRequestConfig = {
            method : method,
            url : url
        }

        
        switch (verb) {
            case HTTP.GET:
                options.method = 'GET'
                break;
            case HTTP.POST:
                options.method = 'POST'
                options.data = requestParameters.body;
                break;
            case HTTP.DELETE:
                options.method = 'DELETE'
                break;
            case HTTP.PATCH:
                options.method = 'PATCH'
                options.data = requestParameters.body;
                break;
            default:
                options.method = 'GET'
                break;
        }

        try{
            const response :AxiosResponse <T> = await axios.request<T, AxiosResponse<T>,S>(options);
            return response.data;
        }
        catch (e){
            const error = e as AxiosError;
            console.error(error);
            throw e;
        }
    }
}