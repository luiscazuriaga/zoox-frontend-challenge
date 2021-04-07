import BaseResponse from './baseResponseInterface'

export interface State{
  nome: string
  abreviacao: string
}

export default interface StateResponse extends BaseResponse, State {}
