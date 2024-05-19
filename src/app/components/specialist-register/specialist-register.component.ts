import { Component , OnInit, Renderer2,ViewEncapsulation } from '@angular/core';
import { FilePickerModule } from 'ngx-awesome-uploader';
import { UploaderCaptions } from 'ngx-awesome-uploader';
import { DemoFilePickerAdapter } from  '@app/file-picker.adapter';
import { CertificatesAdapter } from  '@app/certificates.adapter';
import { AvatarAdapter } from  '@app/avatar.adapter';

import { GlobalService } from '@app/services/global.service';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { FormBuilder, FormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { PocketAuthService } from '@app/services/pocket-auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-specialist-register',
  standalone: true,
  imports: [
    CommonModule,
    FilePickerModule,
    FormsModule,
    NgMultiSelectDropDownModule],
  templateUrl: './specialist-register.component.html',
  styleUrl: './specialist-register.component.css',
  encapsulation: ViewEncapsulation.Emulated 
})
export class SpecialistRegisterComponent {
  captionsSpecialties = {
    confirm: 'Confirmar',
    cancel: 'Cancelar',
    remove: 'Eliminar',
    upload: 'Subir',
    // Agrega más etiquetas según necesites
};

  
  formData = {
    images:[]as string[],
    documents: [] as string[],
    avatar: [] as string[],
    certificates: [] as string[],
    full_name: '',
    email: '',
    phone: '',
    address: '',
    consultationAddress: '',
    city: '',
    country: '',
    gender: '',
    profession: '',
    studyArea: '',
    university: '',
    graduationYear: '',
    specialties: [],
    category: '',
    services: '',
    availability: '',
    days: [],
    membershipPlan: '',
    advertiseServices: [],
    schedule: '',
    status: '',
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: false,
    membership: 'Unlimited Plan',
    advertiseProfile: true,
    advertisePlatform: false
  };
  public captions: UploaderCaptions = {
    dropzone: {
      title: '10 MB máx.',
      or: '.',
      browse: 'Subir documento',
    },
    cropper: {
      crop: 'Cortar',
      cancel: 'Cancelar',
    },
    previewCard: {
      remove: 'Borrar',
      uploadError: 'error',
    },
  };
  public captionsCertificates: UploaderCaptions = {
    dropzone: {
      title: '10 MB máx.',
      or: '.',
      browse: 'Subir certificado',
    },
    cropper: {
      crop: 'Cortar',
      cancel: 'Cancelar',
    },
    previewCard: {
      remove: 'Borrar',
      uploadError: 'error',
    },
  };
  public captionsAvatar: UploaderCaptions = {
    dropzone: {
      title: 'Foto de perfil.',
      or: '.',
      browse: 'Subir Fotografía',
    },
    cropper: {
      crop: 'Cortar',
      cancel: 'Cancelar',
    },
    previewCard: {
      remove: 'Borrar',
      uploadError: 'error',
    },
  };
  adapter = new  DemoFilePickerAdapter(this.http,this.global);
  adapterCertificates = new  CertificatesAdapter(this.http,this.global);
  adapterAvatar = new  AvatarAdapter(this.http,this.global);
  dropdownSettings: IDropdownSettings = {
    singleSelection: false,
    idField: 'id',
    textField: 'name',
    selectAllText: 'Seleccionar todos',
    unSelectAllText: 'Deseleccionar todos',
    itemsShowLimit: 3,
    allowSearchFilter: true
  };
  specialties = [
    { id: 1, name: 'Cardiología' },
    { id: 2, name: 'Dermatología' },
    { id: 3, name: 'Endocrinología' },
    { id: 4, name: 'Gastroenterología' },
    { id: 5, name: 'Neurología' }
  ];
  constructor(
    private formBuilder: FormBuilder, 
    public global:GlobalService,
    public pocketAuthService:PocketAuthService,
    public http:HttpClient,
    private renderer: Renderer2
  ) { }
  onCheckboxChange(day: string, isChecked: boolean): void {
    console.log(`${day} is now ${isChecked ? 'checked' : 'unchecked'}`);
  }
  onCategoryChange(selectedCategory: any): void {
    if (selectedCategory) {
        console.log("seleecionada: "+JSON.stringify(selectedCategory));
        this.global.categorySelected = true;
      let idCategorySelected=selectedCategory[0].id
        // Reiniciar specialtiesFiltered
        this.global.specialtiesFiltered = [];

        for (let specialty of this.global.specialties) {
          console.log("comparando [" +idCategorySelected +"] con ["+specialty.fatherId)
            if (idCategorySelected === specialty.fatherId) {
                console.log("Especialidad agregada al array: " + JSON.stringify(specialty));
                this.global.specialtiesFiltered.push(specialty);
            }
        }
        // Aquí puedes filtrar las especialidades según la categoría seleccionada
        // this.global.specialtiesFiltered = this.getSpecialtiesByCategory(selectedCategory);
    } else {
        this.global.categorySelected = false;
    }
}



  onSubmit() {
    const url = 'https://db.buckapi.com:8090/api/collections/camiwaSpecialists/records';
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.formData.documents=this.global.uploaderImages;
    this.formData.certificates=this.global.certificates;
    this.formData.images=this.global.avatar;
    // this.formData.images=[];
    this.formData.status="pending";

    this.http.post(url, this.formData, { headers })
      .subscribe(
        response => {
          console.log('Respuesta del servidor:', response);
          // Realiza cualquier otra acción necesaria después de enviar los datos
        },
        error => {
          console.error('Error al enviar los datos:', error);
          // Maneja el error adecuadamente
        }
      );
  }
  ngOnInit(): void {
    this.loadExternalScripts([
      'assets/specilist-register/js/jquery-3.3.1.min.js',
      'assets/specilist-register/js/main.js',
      'assets/specilist-register/js/jquery.validate.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/js/bootstrap-datepicker.min.js',
      'assets/specilist-register/js/bootstrap.min.js',
      'assets/specilist-register/js/conditionize.flexible.jquery.min.js',
      'assets/specilist-register/js/switch.js'
    ]);
  }

  loadExternalScripts(urls: string[]) {
    urls.forEach(url => {
      const script = this.renderer.createElement('script');
      script.type = 'text/javascript';
      script.src = url;
      this.renderer.appendChild(document.body, script);
    });
  }

}
