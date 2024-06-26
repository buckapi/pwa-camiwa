import { Component, Renderer2 } from '@angular/core';
import { FilterbarComponent } from '../ui/filterbar/filterbar.component';

import { GlobalService } from '../../services/global.service';
import { CommonModule } from '@angular/common';
import { AuthRESTService } from '@app/services/auth-rest.service';

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [CommonModule,FilterbarComponent],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent {
  constructor(
    private renderer: Renderer2,
    public authRest:AuthRESTService,
    public global: GlobalService,
  ){
    this.renderer.setAttribute(
      document.body,
      'class',
      'fixed sidebar-mini sidebar-collapse'
    );
  }
  viewDetail(specialist:any){
    this.global.previewRequest=specialist;
    this.global.setRoute('specialistdetail')
  }
}
