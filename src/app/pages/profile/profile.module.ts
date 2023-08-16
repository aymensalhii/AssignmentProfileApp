import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { AddressDetailsComponent } from './address-details/address-details.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { UsersListComponent } from './users-list/users-list.component';


@NgModule({
  declarations: [
    ProfileComponent,
    AddressDetailsComponent,
    CompanyDetailsComponent,
    UsersListComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
