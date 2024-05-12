import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";
@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule

  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  selectedNivel: string = ''; // Propiedad para almacenar el nivel seleccionado

constructor(
  private modalService: NgbModal,
){}
}
