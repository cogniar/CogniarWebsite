import { DOCUMENT, ViewportScroller } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';
import { commonservice } from '../service/commonservice';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  @HostListener("window:scroll", [])
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollTop > 556 && scrollTop < 1136) {
      this.commonservice.setMenu("Service");
    }
    else if (scrollTop > 1368 && scrollTop < 2288) {
      this.commonservice.setMenu("About");
    }
    else if (scrollTop > 2618 && scrollTop < 3648) {
      this.commonservice.setMenu("Careers");
    }
    else {
      this.commonservice.setMenu("");
    }
  }
  constructor(private commonservice: commonservice, private viewportScroller: ViewportScroller) {   
    this.commonservice.section.subscribe(sectionId=>{
      this.viewportScroller.scrollToAnchor(sectionId);;
    })
  }

  onScroll(event: any) {

  }
}
