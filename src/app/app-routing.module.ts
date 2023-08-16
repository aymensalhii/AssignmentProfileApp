import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

const routes: Routes = [
  { 
    path: 'profile', 
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule) 
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'profile',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
