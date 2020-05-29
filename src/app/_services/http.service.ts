import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GithubUser } from '../models/githubuser.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  private apiURL = 'https://api.github.com/users?';

  constructor(
    private http: HttpClient
  ) { }

  getGithubUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiURL);
  }

  getGithubUserById(id: number): Observable<GithubUser> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<GithubUser>(url);
  }
}
