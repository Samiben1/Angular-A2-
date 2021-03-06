import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../_models/User';
import { Chat } from '../_models/Chat'
import { UserService } from '../_services/user.service';
import {AuthenticationService} from '../_services/authentication.service';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    loading = false;
    users: User[];

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.loading = true;
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.loading = false;
            this.users = users;
        });
    }
}