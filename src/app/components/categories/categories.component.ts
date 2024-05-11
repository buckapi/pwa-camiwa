import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [ModalComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
constructor(
  private modalService: NgbModal,
){}
openModal() {
  const modalRef = this.modalService.open(ModalComponent);
  // Puedes pasar datos al modal utilizando el método 'componentInstance' del modalRef.
  // modalRef.componentInstance.data = myData;
}
}
