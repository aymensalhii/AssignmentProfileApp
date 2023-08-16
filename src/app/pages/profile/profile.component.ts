import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PartialUser } from 'src/app/common/models/partial-user';
import { User } from 'src/app/common/models/user';
import { UserDataService } from 'src/app/common/services/user-data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  users: PartialUser[] = [];
  selectedUser!: User;
  ProfileForm: FormGroup;

  constructor(
    private userDataService: UserDataService
  ) {
    this.ProfileForm = new FormGroup({
      name: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      website: new FormControl(''),
    })
  }

  async ngOnInit() {
    await this.userDataService.getAllPartialUsers().subscribe(res => {
      this.users = res;
      this.fetchUserDetails(this.users[0].id);
    })
  }

  fetchUserDetails(id: number) {
    this.userDataService.getUserDetails(id).subscribe(user => {
      this.selectedUser = user!;
      this.InitProfileForm(this.selectedUser);
    });
  }

  InitProfileForm(data: User) {
    this.ProfileForm.controls['name'].setValue(data.name)
    this.ProfileForm.controls['username'].setValue(data.username)
    this.ProfileForm.controls['email'].setValue(data.email)
    this.ProfileForm.controls['phone'].setValue(data.phone)
    this.ProfileForm.controls['website'].setValue(data.website)
  }
}
