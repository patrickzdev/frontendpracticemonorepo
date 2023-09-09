import {AllDataContractsType } from "./DataContractTypes"
import { HTTP } from "../httpClient/IHTTPClientTypes"




export const dataContracts : AllDataContractsType = {
    "FinancialConnectionsAccountDisconnect" : {
        generateUrl: (id: string ) => { return `/v1/financial_connections/accounts/${id}/disconnect`},
        verb : HTTP.POST
    },
    
    "FinancialConnectionsAccountConnect": {
        generateUrl: (id: string ) => { return `/v1/financial_connections/accounts/${id}/connect`},
        verb : HTTP.POST
    }
}