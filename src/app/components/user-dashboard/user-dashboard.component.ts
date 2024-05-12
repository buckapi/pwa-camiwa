import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthRESTService } from '@app/services/auth-rest.service';

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent {
  constructor(
    public authRest:AuthRESTService
  ){}

}
