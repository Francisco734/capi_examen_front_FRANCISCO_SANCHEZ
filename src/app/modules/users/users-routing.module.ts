import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserTableComponent } from './user-table/user-table.component';

const routes: Routes = [
  {
    path:'list',
    component:UserTableComponent,
  },
  {
    path: '', redirectTo: 'list', pathMatch: 'full',
  },
  {
    path: '**', redirectTo: 'list', pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
