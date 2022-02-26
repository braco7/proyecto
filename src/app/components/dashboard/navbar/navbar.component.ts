import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Menu } from 'src/app/interfaces/menu';
import { MenuServiceService } from 'src/app/services/menu-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  itemsDeMenu: Menu[] = []

  constructor(private _menuservice: MenuServiceService) { }

  ngOnInit(): void {
    this.getMenuItems()
  }

  getMenuItems() {
    this._menuservice.getMenu()
      .subscribe(list => {
        console.log(list)
        this.itemsDeMenu = list
      })
  }


}
