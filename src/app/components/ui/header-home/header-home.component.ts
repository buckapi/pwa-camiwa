import { Component } from '@angular/core';
import { GlobalService } from '../../../services/global.service';
import { virtualRouter } from '@app/services/virtualRouter.service';

@Component({
  selector: 'app-header-home',
  standalone: true,
  imports: [],
  templateUrl: './header-home.component.html',
  styleUrl: './header-home.component.css'
})
export class HeaderHomeComponent {
constructor(
  public global:GlobalService,
  public virtualRouter:virtualRouter
){}
}
