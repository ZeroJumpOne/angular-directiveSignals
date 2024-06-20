import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { SingleUserRespose, User } from '../interfaces/user-request.interface';

@Injectable({
   providedIn: 'root'
})
export class UserService {

   private http = inject(HttpClient);
   private baseUrl = 'https://reqres.in/api/users';

   constructor() { }

   getUserById( id: number ): Observable<User> {

      return this.http.get<SingleUserRespose>(`${ this.baseUrl }/${ id }`)
         .pipe(
            map( resp => resp.data ),
            tap(console.log )
         )

   }
}
