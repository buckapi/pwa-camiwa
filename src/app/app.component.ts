import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GlobalService } from './services/global.service';
import { CommonModule } from '@angular/common';
import { ScriptService } from './services/script.service';

import { MapwrapperComponent } from './components/mapwrapper/mapwrapper.component';
import { HeaderComponent } from './components/ui/header/header.component';
import { HeaderHomeComponent } from './components/ui/header-home/header-home.component';
import { FooterComponent } from './components/ui/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { virtualRouter } from './services/virtualRouter.service';
import { TestComponent } from './components/test/test.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,MapwrapperComponent,HeaderComponent,FooterComponent,HomeComponent,HeaderHomeComponent,TestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'camiwa';
  constructor(
    public global: GlobalService,
    public script: ScriptService,
    public virtualRouter: virtualRouter ,
 ) {

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
    'google-maps',
    'custom-script',
    'listing-map',

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

  }
}

