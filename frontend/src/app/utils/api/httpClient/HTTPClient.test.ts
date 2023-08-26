
import axios, { AxiosHeaders } from "axios";
import { IHttpClientRequestParameters } from "./IHTTPClientTypes";
import { HttpClient } from "./HTTPClient";
import { AxiosResponse} from "axios"

jest.mock("axios");

describe('Test Axios Based HTTPClient', () => {

    it('expectCorrectResponse_whenHTTPClientGetCalled_GivenRequestBody', async () => {

        //Given
        const requestParams : IHttpClientRequestParameters = {
            url : "https://www.test.com/v1/path"
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
            () => Promise.resolve<AxiosResponse<ResponseType>>(mockedAxiosResponse)
        )

        //When
        const httpClientResponse : ResponseType = await httpClient.get<ResponseType>(requestParams)
            
        //Then
        expect(httpClientResponse).toEqual(expectedResponse);
    });
  
  
  });
   