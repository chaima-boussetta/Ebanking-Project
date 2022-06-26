import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Agent } from '../models/agent';

const baseUrl = 'http://localhost:8191/api/agent';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  constructor(private http: HttpClient) { }
  private _agent: Agent = new Agent;
  get agent(): Agent {
    if(this._agent==null)
      {
        this._agent = new Agent();
      } 
   return this._agent;
}
set agent (value:Agent) {
  this._agent=value;
}
  getAll(): Observable<Agent[]> {
    return this.http.get<Agent[]>(baseUrl+"/agents");
  }
  get(id: any): Observable<Agent> {
    return this.http.get(`${baseUrl}/${id}`);
  }
  create(data: any): Observable<any> {
    return this.http.post(baseUrl+"/addAgent", data);
  }
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }
  findByFirstname(title: any): Observable<Agent[]> {
    return this.http.get<Agent[]>(`${baseUrl}?firstname=${title}`);
  }
}
