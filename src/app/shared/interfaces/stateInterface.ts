import BaseResponse from './BaseResponseInterface'

export interface State{
  nome: string
  abreviacao: string
}

export default interface StateResponse extends BaseResponse, State {}
