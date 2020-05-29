import {Injectable} from '@angular/core';
import {User} from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { GithubUser } from '../models/githubuser.model';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private apiURL = 'https://api.github.com/users'
  public itemValue = new BehaviorSubject(this.theItem);

  set theItem(value) {
    this.itemValue.next(value); // this will make sure to tell every subscriber about the change.
    localStorage.setItem('ghUsers', value);
  }
 
  get theItem() {
    return localStorage.getItem('ghUsers');
  }

  constructor(
    private http: HttpClient,
    ) {
  }

  getGithubUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiURL);
  }

  public listGhUsers(): any[] {
    return JSON.parse(localStorage.getItem('ghUsers'));
  }

  public add(user) {
    const data = this.listGhUsers();
    data.push(user);
    localStorage.setItem('ghUsers', JSON.stringify(data));
  }

  public save(user) {
    let data = this.listGhUsers();
    data = data.filter(value => value.id !== user.id);
    data.push(user);
    localStorage.setItem('ghUsers', JSON.stringify(data));
  }

  public delete(id): Observable<any> {
    let data = this.listGhUsers();
    data = data.filter(value => value.id !== id);
    data.splice(id, 1);
    localStorage.setItem('ghUsers', JSON.stringify(data));
    return id;
  }

  public findByGithubId(id: number): Observable<GithubUser> {
    let data = [];
    data = this.listGhUsers();
    for (const d of data) {
      if (d.id == id) {
        return d;
      }
    }
    return undefined;
  }

}
