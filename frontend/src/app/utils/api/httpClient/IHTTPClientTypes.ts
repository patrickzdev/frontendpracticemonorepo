export interface IHttpClientRequestParameters<T = void> {
    url: string
    body?: T
}

export interface IHttpClient {
    get<T>(parameters: IHttpClientRequestParameters): Promise<T>
}