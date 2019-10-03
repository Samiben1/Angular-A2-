import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { User } from '../_models/User';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    //get all users present in the database
    getAll() {
        return this.http.get<User[]>(`${environment.apiUrl}/users`);
    }
}