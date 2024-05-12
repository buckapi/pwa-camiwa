import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GlobalService } from '@app/services/global.service';

@Component({
  selector: 'app-requests',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './requests.component.html',
  styleUrl: './requests.component.css'
})
export class RequestsComponent {
  constructor(
    public global:GlobalService
  ){}
  isValidImageUrl(url: string): boolean {
    // Expresión regular para verificar si la cadena es una URL de imagen válida
    const imageRegex = /\.(jpeg|jpg|gif|png|webp)$/;
  
    return typeof url === 'string' && url !== '' && imageRegex.test(url);
  }
}
