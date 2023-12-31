import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { AddressDetailsComponent } from './address-details/address-details.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { SharedModule } from 'src/app/common/modules/shared.module';


@NgModule({
  declarations: [
    ProfileComponent,
    AddressDetailsComponent,
    CompanyDetailsComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule
  ]
})
export class ProfileModule { }
