import { Component } from '@angular/core';
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
    public authRest:AuthRESTService,
    public global: GlobalService,
  ){}

}
