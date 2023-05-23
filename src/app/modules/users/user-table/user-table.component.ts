import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from '../services/users.service';
import { catchError, from, Observable, of, throwError } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css'],
})
export class UserTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource:any
  displayedColumns: string[] = [
    'name',
    'birth_date',
    'age',
    'address',
  ];

  users: any = [];

  constructor(public users_services: UsersService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.users_services
      .index()
      .pipe(
        catchError((err: any) => {
          let msj = err.error.message;
          return throwError(() => new Error(msj));
        })
      )
      .subscribe((data: any) => {
        this.dataSource = new MatTableDataSource(data.users);
        this.dataSource.paginator = this.paginator;
      });
  }
}
