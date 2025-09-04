import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, Route } from '@angular/router';
import { HomePageComponent } from './app/course-project/home-page/home-page.component';


const routes: Route[] = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  // Add more routes here if needed
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
});
