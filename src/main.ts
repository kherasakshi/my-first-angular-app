import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, Route, withHashLocation } from '@angular/router';
import { HomePageComponent } from './app/course-project/home-page/home-page.component';

const routes: Route[] = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes, withHashLocation())]
});
