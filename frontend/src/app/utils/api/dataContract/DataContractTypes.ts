import { HTTP } from "../httpClient/IHTTPClientTypes"

export interface DataContractType {
    generateUrl: ((pathParam1 : string) => string) & ((pathParam1 : string , pathParam2: string) => string)
    verb : HTTP,
}

export interface AllDataContractsType {
    [id: string]: DataContractType; 
}

