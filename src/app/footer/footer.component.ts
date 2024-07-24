import { Component } from '@angular/core';
import { NewsletterComponent } from '../newsletter/newsletter.component';
import { commonservice } from '../service/commonservice';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    NewsletterComponent,
    CommonModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  currentYearLong(): number {
    return new Date().getFullYear();
    }
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
