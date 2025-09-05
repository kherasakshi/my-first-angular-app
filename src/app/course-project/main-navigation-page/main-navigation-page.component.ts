import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-main-navigation-page',
  templateUrl: './main-navigation-page.component.html',
  styleUrls: ['./main-navigation-page.component.css'],
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule, RouterModule]
})
export class MainNavigationPageComponent {
  isMenuOpen = false;
}