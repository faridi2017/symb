import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import { ResourceURI } from '../apiResource/resource-uri';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class SybmDemoService {

  constructor(private http: HttpClient) { }

  get_mocked_data(){
     return this.http.get(ResourceURI.get_comments, httpOptions);
   }
}
