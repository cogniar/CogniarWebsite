import { Component } from '@angular/core';
import { commonservice } from '../service/commonservice';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dark-light-theme',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dark-light-theme.component.html',
  styleUrl: './dark-light-theme.component.css'
})
export class DarkLightThemeComponent {
  isDark:boolean=false;
  constructor(private commonservice:commonservice)
  {

  }
  toggleDarkTheme(): void {
    this.isDark=!this.isDark;
    this.commonservice.setMode(this.isDark);
    document.body.classList.toggle('dark-theme');
  }
}
