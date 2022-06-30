import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormResponse } from 'src/app/models/form-response';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  user: User = new User();
  fResponse = new FormResponse();
  countries = environment.COUNTRIES;

  constructor(private router: Router,
              private userService: UserService,
              private activatedRoute: ActivatedRoute) { }

  async ngOnInit() {
    let userId = await this.activatedRoute.snapshot.params['id'];
    if (!userId) this.router.navigate(['users']);
    if (userId != 'new') {
      this.userService.getUserById(userId).toPromise()
      .then(res => this.user = res)
      .catch(err => console.log)
    }
  }

  save() {
    if (this.user._id) {
      this.userService.updateUser(this.user).toPromise()
      .then(res => this.user = res)
      .catch(err => console.log)
    } else {
      this.userService.addUser(this.user).toPromise()
      .then(res => {
        this.fResponse.setMessage("User added succesfully.");
        this.router.navigate(['/users'])
      })
      .catch(err => {
        console.log(err)
        this.fResponse.setError(err.error.error)
      })
    }
    
  }

}
