import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export default class BaseService<Request,Response> {

  apiUrl = "http://localhost:8000/api/v1"

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':"application/json",
      'Authorization':"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNmI1YjNjZGEwMzc3OTE5MGZiY2JjYyIsImlhdCI6MTYxNzc3ODk1OH0.A7rc2uTXHLkKo87r43vmTnyGGag98Vz574SbSddPn90"
    })
  }

  constructor(
    private httpClient: HttpClient,
    public path: string
  ) { }

  post = (data: Request): Observable<object | Response> =>{
    return this.httpClient.post(this.apiUrl + this.path,data,this.httpOptions);
  };

  get = (filters?:string): Observable<object | Response> => {
    const filtering = filters ? `?${filters}`: ""
    return this.httpClient.get(this.apiUrl + this.path + `${filtering}`,this.httpOptions)
  };

  getById = (id: string): Observable<object | Response> => {
    return this.httpClient.get(this.apiUrl + this.path + `/${id}`,this.httpOptions)
  };

  update = (id: string, data: Request): Observable<object | Response> => {
    return this.httpClient.put(this.apiUrl + this.path + `/${id}`, data,this.httpOptions)
  };

  delete = (id: string): Observable<object | Response> => {
    return this.httpClient.delete(this.apiUrl + this.path + `/${id}`,this.httpOptions);
  };
}
