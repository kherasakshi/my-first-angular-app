import { Component } from '@angular/core';
import { HomePageComponent } from './course-project/home-page/home-page.component';
import { MainNavigationPageComponent } from './course-project/main-navigation-page/main-navigation-page.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [MainNavigationPageComponent, RouterOutlet]
})
export class AppComponent {
  title = 'my-first-angular-app';
}
