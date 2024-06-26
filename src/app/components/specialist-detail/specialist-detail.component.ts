import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { GlobalService } from '@app/services/global.service';

@Component({
  selector: 'app-specialist-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './specialist-detail.component.html',
  styleUrl: './specialist-detail.component.css',
  encapsulation: ViewEncapsulation.Emulated 
})
export class SpecialistDetailComponent {
constructor(
public global:GlobalService

){}
}
