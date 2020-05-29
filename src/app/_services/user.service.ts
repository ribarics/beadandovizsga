import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GithubUser } from '../models/githubuser.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegUser } from '../models/reguser.model';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get<RegUser[]>(`${environment.apiUrl}/users`);
  }
}
