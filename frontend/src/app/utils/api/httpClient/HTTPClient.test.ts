
import axios, { AxiosHeaders, AxiosRequestConfig } from "axios";
import { IHttpClientRequestParameters } from "./IHTTPClientTypes";
import { HttpClient } from "./HTTPClient";
import { AxiosResponse} from "axios"
import { HTTP } from "./IHTTPClientTypes";

jest.mock("axios");

describe('Test Axios Based HTTPClient', () => {

    it('expectCorrectResponse_whenHTTPClientGETCalled', async () => {

        //Given
        const url : string = "https://www.test.com/v1/user/1"
        const requestParams : IHttpClientRequestParameters = {
            url : url,
            verb : HTTP.GET
        }

        const httpClient : HttpClient = new HttpClient();
        
        interface ResponseType  {
            id : number,
            firstName : string
            lastName : string
        }

        const expectedResponse : ResponseType = {
            id : 123,
            firstName : "John",
            lastName : "Doe"
        }

        //Mocking axios call
        const mockedAxios = axios as jest.Mocked<typeof axios>;

        const mockedAxiosResponse : AxiosResponse<ResponseType>= {
            data: expectedResponse,
            status: 200,
            statusText: 'OK',
            headers : {"Content-Length": "120"},
            config : {headers: new AxiosHeaders({"HeaderName": "HeaderValue"})}  ,
        }

        mockedAxios.request.mockImplementation(
            (axiosRequest : AxiosRequestConfig) => {
                if(axiosRequest.method == 'GET' && axiosRequest.url == url)
                    return Promise.resolve<AxiosResponse<ResponseType>>(mockedAxiosResponse)
                else
                    return Promise.reject();
            }
        )

        //When
        const httpClientResponse : ResponseType = await httpClient.makeRequest<ResponseType>(requestParams)
            
        //Then
        expect(httpClientResponse).toEqual(expectedResponse);
    });

    it('expectCorrectResponse_whenHTTPClientDELETECalled', async () => {

        //Given
        const url : string = "https://www.test.com/v1/user/1"
        const requestParams : IHttpClientRequestParameters = {
            url : url,
            verb : HTTP.DELETE
        }

        const httpClient : HttpClient = new HttpClient();
        
        interface ResponseType  {
            status : string
        }

        const expectedResponse : ResponseType = {
            status : "SUCCESS"
        }

        //Mocking axios call
        const mockedAxios = axios as jest.Mocked<typeof axios>;

        const mockedAxiosResponse : AxiosResponse<ResponseType>= {
            data: expectedResponse,
            status: 200,
            statusText: 'OK',
            headers : {"Content-Length": "120"},
            config : {headers: new AxiosHeaders({"HeaderName": "HeaderValue"})}  ,
        }

        mockedAxios.request.mockImplementation(
            (axiosRequest : AxiosRequestConfig) => {
                if(axiosRequest.method == 'DELETE' && axiosRequest.url == url)
                    return Promise.resolve<AxiosResponse<ResponseType>>(mockedAxiosResponse)
                else
                    return Promise.reject();
            }
        )

        //When
        const httpClientResponse : ResponseType = await httpClient.makeRequest<ResponseType>(requestParams)
            
        //Then
        expect(httpClientResponse).toEqual(expectedResponse);
    });

    it('expectCorrectResponse_whenHTTPClientPOSTCalled_GivenRequestBody', async () => {

        //Given

        const httpClient : HttpClient = new HttpClient();
        
        interface ResponseType  {
            id : number,
            firstName : string
            lastName : string
        }

        interface RequestType  {
            firstName : string
            lastName : string
        }

        const request : RequestType = {
            firstName : "John",
            lastName : "Doe"
        }

        const expectedResponse : ResponseType = {
            id : 123,
            firstName : "John",
            lastName : "Doe"
        }

        const url : string = "https://www.test.com/v1/user/create"
        const requestParams : IHttpClientRequestParameters<RequestType> = {
            url : url,
            verb : HTTP.POST,
            body : request
        }

        //Mocking axios call
        const mockedAxios = axios as jest.Mocked<typeof axios>;

        const mockedAxiosResponse : AxiosResponse<ResponseType>= {
            data: expectedResponse,
            status: 200,
            statusText: 'OK',
            headers : {"Content-Length": "120"},
            config : {headers: new AxiosHeaders({"HeaderName": "HeaderValue"})}  ,
        }

        mockedAxios.request.mockImplementation(
            (axiosRequest : AxiosRequestConfig) => {
                if(axiosRequest.method == 'POST'  && axiosRequest.data == request && axiosRequest.url == url)
                    return Promise.resolve<AxiosResponse<ResponseType>>(mockedAxiosResponse)
                else
                    return Promise.reject();
            }
        )

        //When
        const httpClientResponse : ResponseType = await httpClient.makeRequest<ResponseType, RequestType>(requestParams)
            
        //Then
        expect(httpClientResponse).toEqual(expectedResponse);
    });
  
    it('expectCorrectResponse_whenHTTPClientPATCHCalled_GivenRequestBody', async () => {

        //Given

        const httpClient : HttpClient = new HttpClient();
        
        interface ResponseType  {
            id : number,
            firstName : string
            lastName : string
        }

        interface RequestType  {
            firstName : string
            lastName : string
        }

        const request : RequestType = {
            firstName : "John",
            lastName : "Doe"
        }

        const expectedResponse : ResponseType = {
            id : 123,
            firstName : "John",
            lastName : "Doe"
        }

        const url : string ="https://www.test.com/v1/user/1/update"
        const requestParams : IHttpClientRequestParameters<RequestType> = {
            url : url,
            verb : HTTP.PATCH,
            body : request
        }

        //Mocking axios call
        const mockedAxios = axios as jest.Mocked<typeof axios>;

        const mockedAxiosResponse : AxiosResponse<ResponseType>= {
            data: expectedResponse,
            status: 200,
            statusText: 'OK',
            headers : {"Content-Length": "120"},
            config : {headers: new AxiosHeaders({"HeaderName": "HeaderValue"})}  ,
        }

        mockedAxios.request.mockImplementation(
            (axiosRequest : AxiosRequestConfig) => {
                if(axiosRequest.method == 'PATCH'  && axiosRequest.data == request && axiosRequest.url == url)
                    return Promise.resolve<AxiosResponse<ResponseType>>(mockedAxiosResponse)
                else
                    return Promise.reject();
            }
        )

        //When
        const httpClientResponse : ResponseType = await httpClient.makeRequest<ResponseType, RequestType>(requestParams)
            
        //Then
        expect(httpClientResponse).toEqual(expectedResponse);
    }); 
  });
   