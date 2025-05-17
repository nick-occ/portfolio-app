import { Component } from '@angular/core';
import { MenubarComponent } from './menubar/menubar.component';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [MenubarComponent, RouterModule]
})
export class AppComponent {
  title = 'portfolio-app';
}
