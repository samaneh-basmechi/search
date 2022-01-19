import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UsersModel} from '../interfaces/user.interface';
import {map} from 'rxjs/operators';
import {UserDataInterface} from '../interfaces/user-data.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {
  }

  public get(): Observable<Array<UserDataInterface>> {
    return this.http.get('https://gorest.co.in/public/v1/users')
      .pipe(map((result: UsersModel) => result.data));
  }

  public search(name: string): Observable<Array<UserDataInterface>> {
    return this.http.get(`https://gorest.co.in/public/v1//users?name=${name}`)
      .pipe(map((result: UsersModel) => result.data));
  }

}
