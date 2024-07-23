import { Component } from '@angular/core';
import { DarkLightThemeComponent } from '../dark-light-theme/dark-light-theme.component';
import { commonservice } from '../service/commonservice';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    DarkLightThemeComponent,
    CommonModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isDark: boolean = false;
  iswhichMenu: string = "";
  constructor(private commonService: commonservice) {
    this.commonService.isDark.subscribe((data) => {
      this.isDark = data;
    })
    this.commonService.iswhichMenu.subscribe((data) => {
      this.iswhichMenu = data;
    })

  }
  scrollToSection(section: any) {
    this.commonService.setSection(section);
  }



}
