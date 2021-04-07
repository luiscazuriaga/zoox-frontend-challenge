import BaseResponse from "./BaseResponseInterface"

export interface City{
  nome: string
  estadoId: string
}

export default interface CityResponse extends BaseResponse, City {}
