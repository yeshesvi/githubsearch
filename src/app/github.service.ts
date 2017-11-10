import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private username: string;
  constructor(private http: Http) {
    console.log('github service is ready ...');
    this.username = 'bradtraversy';
  }
  getUser() {
    return this.http.get('http://api.github.com/users/' + this.username)
      .map(res => res.json());
  }

}
