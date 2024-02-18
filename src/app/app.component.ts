import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GlobalService } from './services/global.service';
import { CommonModule } from '@angular/common';
import { ScriptService } from './services/script.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'camiwa';
  constructor(
    public global: GlobalService,
    public script: ScriptService
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
  )
    .then(() => {
      console.log('Todos los scripts se cargaron correctamente');
    })
    .catch(error => console.log(error));

    // this.epicFunction();

  }
}

