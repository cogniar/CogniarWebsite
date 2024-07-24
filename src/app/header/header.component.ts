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
    if (section == 'services')
      window.scrollTo({ top: 550, behavior: 'smooth' });
    if (section == 'about')
      window.scrollTo({ top: 1400, behavior: 'smooth' });
    if (section == 'careers')
      window.scrollTo({ top: 2600, behavior: 'smooth' });

    //window.scrollTo({ top: 2600, behavior: 'smooth' });
    //this.commonService.setSection(section);
  }



}
