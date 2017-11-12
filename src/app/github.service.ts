import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private username: string;
  private client_id = 'ea496b59e26af186af98';
  private client_secret = '8db968f47c740c742177c6eeecd743f2ce6c6b16';
  constructor(private http: Http) {
    console.log('github service is ready ...');
    this.username = 'yeshesvi';
  }
  getUser() {
    return this.http.get('http://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
      .map(res => res.json());
  }

  getRepos() {
    return this.http.get('http://api.github.com/users/' + this.username + '/repos' + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
      .map(res => res.json());
  }

  updateUser(username: string) {
    this.username = username;
  }

}
