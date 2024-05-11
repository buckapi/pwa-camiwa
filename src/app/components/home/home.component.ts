import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { CommonModule } from '@angular/common';
import { virtualRouter } from '@app/services/virtualRouter.service';
import { AuthRESTService } from '@app/services/auth-rest.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
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

}
