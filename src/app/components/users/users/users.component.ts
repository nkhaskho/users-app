import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[] = []

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.loadUsers(); 
  }

  loadUsers() {
    this.userService.getAllUsers().toPromise()
    .then(res => this.users = res)
    .catch(err => console.log)
  }

  delete(id: string) {
    this.userService.deleteUser(id).toPromise()
    .then(res => this.router.navigate(['/users']))
    .catch(err => console.log)
  }

}
