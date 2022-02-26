import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UsersServiceService } from 'src/app/services/users-service.service';





@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  userList: User[] = []
  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'acciones'];
  dataSource = this.userList;

  constructor(private _usuarios: UsersServiceService) { }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers() {
    this._usuarios.get()
      .subscribe(x => {
        this.userList = x
      })
  }
  delete(i: Event) {
    console.log(i)
  }

}
