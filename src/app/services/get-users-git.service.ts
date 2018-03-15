import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GetUsersGitService {

  constructor(private http: HttpClient) { }
 
  public getUsers(user: any): Observable<any> {
    return this.http.get(`https://api.github.com/search/users?q=${user}`);
  }
}
