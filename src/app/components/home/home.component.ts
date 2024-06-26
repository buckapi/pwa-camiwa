import { Component ,ViewEncapsulation,AfterViewInit} from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { CommonModule } from '@angular/common';
import { virtualRouter } from '@app/services/virtualRouter.service';
import { AuthRESTService } from '@app/services/auth-rest.service';
<<<<<<< HEAD
// import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
=======
>>>>>>> f06b295 (fase 2 add)
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
<<<<<<< HEAD
import { ScriptService } from '@app/services/script.service';
=======
>>>>>>> f06b295 (fase 2 add)
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',

  encapsulation: ViewEncapsulation.Emulated 
})
export class HomeComponent implements AfterViewInit {
<<<<<<< HEAD
  
=======
>>>>>>> f06b295 (fase 2 add)
constructor(
  public script: ScriptService,
  public global:GlobalService,
  public virtualRouter:virtualRouter,
  public authRest:AuthRESTService
){
  this.script.load(
    'jquery',
    'bootstrap',
    'aos',
    'macy',
    'simple-parallax',
    'owl-carousel',
    'resizeSensor',
    'theia-sticky-sidebar',
    'waypoints',
    'counter-up',
    'fancy-ui-widget',
    'fancy-file-fileupload',
    'fancy-file-uploader',
    'fancy-file-transport',
    'ion.rangeSlider',
    'magnific-popup',
    'select2',
    // 'google-maps',
    'custom-script',
    // 'listing-map',
    'metisMenu', 
    'perfect', 
    'app', 
    'dashboard', 
    'messenger',
  )
    .then(() => {
      console.log('Todos los scripts se cargaron correctamente');
    })
    .catch(error => console.log(error));
    // this.epicFunction();
    
  if(this.authRest.isLogin()){
    // this.virtualRouter.routerActive="dashboard";
    this.global.setRoute("dashboard")
  }
}
<<<<<<< HEAD
  ngAfterViewInit() {
    new Swiper('.swiper-container', {

        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          // when window width is >= 640px
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        },
      });
  }
=======
ngAfterViewInit() {
  new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // when window width is >= 640px
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      // when window width is >= 1024px
      1024: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });
}
>>>>>>> f06b295 (fase 2 add)
}
