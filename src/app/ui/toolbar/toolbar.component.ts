import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/shared/MenuItem';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  tieredItems: MenuItem[] =[];

  ngOnInit(): void {
    this.tieredItems = [
      {
          label: 'Producto',
          icon: 'pi pi-fw pi-table'
      },
      {
          label: 'Ventas',
          icon: 'pi pi-fw pi-shopping-cart',
          items: [
              {
                  label: 'Publico',
                  icon: 'pi pi-fw pi-list'
              },
              {
                  label: 'Apadrinados',
                  icon: 'pi pi-fw pi-search'
              }

          ]
      },

      { separator: true },
      {
          label: 'Quit',
          icon: 'pi pi-fw pi-sign-out'
      }
  ];
  }

}
