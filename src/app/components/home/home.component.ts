import { Component ,ViewEncapsulation,AfterViewInit} from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { CommonModule } from '@angular/common';
import { virtualRouter } from '@app/services/virtualRouter.service';
import { AuthRESTService } from '@app/services/auth-rest.service';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',

  encapsulation: ViewEncapsulation.Emulated 
})
export class HomeComponent implements AfterViewInit {
  
constructor(
  public global:GlobalService,
  public virtualRouter:virtualRouter,
  public authRest:AuthRESTService
){

  if(this.authRest.isLogin()){
    // this.virtualRouter.routerActive="dashboard";
    this.global.setRoute("dashboard")
  }
}
ngAfterViewInit() {
  new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 50,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
  });
}
}
