import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { UsersRoutingModule } from './users-routing.module';
import { UserTableComponent } from './user-table/user-table.component';
import { NavbarComponent } from './globals/navbar/navbar.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    UserTableComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule,
    MatPaginatorModule,
    MatTableModule
  ]
})
export class UsersModule { }
