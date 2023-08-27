export enum HTTP {
    POST = "POST",
    PATCH = "PATCH",
    GET = "GET",
    DELETE = "DELETE",
}
export interface IHttpClientRequestParameters<T = void> {
    url: string
    body?: T
    verb : HTTP
}

export interface IHttpClient {
    makeRequest<T, S = void> (parameters: IHttpClientRequestParameters<S>): Promise<T>
}