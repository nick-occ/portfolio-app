import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu'
import { MatIconModule } from '@angular/material/icon'
import { MatToolbarModule } from '@angular/material/toolbar'

@Component({
    selector: 'app-menubar',
    templateUrl: './menubar.component.html',
    styleUrls: ['./menubar.component.css'],
    imports:[RouterModule,MatMenuModule,MatIconModule,MatToolbarModule]
})
export class MenubarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
