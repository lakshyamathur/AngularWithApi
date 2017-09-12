import { Injectable } from '@angular/core';
import { Login } from './loginmodel';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class LoginService {
private FavUrl = 'http://localhost:49379/api/login';  // URL to web api
private headers = new Headers({'Content-Type': 'application/json'});
constructor(private http: Http) { }
 
signup(Login:Login){
    return this.http.post(this.FavUrl,Login,{headers: this.headers}).map(res=>res.json());
    }

login(Email:string,Password:string){
	console.log("service: i recieved the obj"+Email+Password);
	return this.http
			.get(this.FavUrl+"/1?email="+Email+"&password="+Password).map(res =>res.json());


}

  private handleError(error: any): Promise<any> {
  console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
}

}