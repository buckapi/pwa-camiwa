import { Component , OnInit, Renderer2,ViewEncapsulation } from '@angular/core';
import { FilePickerModule } from 'ngx-awesome-uploader';
import { UploaderCaptions } from 'ngx-awesome-uploader';
import { DemoFilePickerAdapter } from  '@app/file-picker.adapter';
import { CertificatesAdapter } from  '@app/certificates.adapter';

import { GlobalService } from '@app/services/global.service';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { FormBuilder, FormsModule } from '@angular/forms';
@Component({
  selector: 'app-specialist-register',
  standalone: true,
  imports: [FilePickerModule,FormsModule],
  templateUrl: './specialist-register.component.html',
  styleUrl: './specialist-register.component.css',
  encapsulation: ViewEncapsulation.Emulated 
})
export class SpecialistRegisterComponent {
  formData = {
    documents: [] as string[],
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
    specialty: '',
    services: '',
    availability: '',
    days: [],
    membershipPlan: '',
    advertiseServices: [],
    schedule: '',
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
  adapter = new  DemoFilePickerAdapter(this.http,this.global);
  adapterCertificates = new  CertificatesAdapter(this.http,this.global);
  constructor(
    private formBuilder: FormBuilder, 
    public global:GlobalService,
    public http:HttpClient,
    private renderer: Renderer2
  ) { }
  onSubmit() {
    const url = 'https://db.buckapi.com:8090/api/collections/camiwaSpecialists/records';
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.formData.documents=this.global.uploaderImages;
    this.formData.certificates=this.global.certificates;
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
