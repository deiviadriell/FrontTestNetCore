import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule, NgOption } from '@ng-select/ng-select';
import { Cliente } from 'src/app/shared/interfaces/cliente';
import { ClienteService } from '../../shared/service/cliente.service';
import { NotificacionService } from '../../shared/service/notificacion-service.service';
@Component({
  selector: 'app-new-edit',
  templateUrl: './new-edit.component.html',
  styleUrls: ['./new-edit.component.css']
})
export class NewEditComponent implements OnInit {
  @Input() clienteEdit?: Cliente;  
  @Input() tituloModal: string = '';
  @Output() passEntry: EventEmitter<boolean> = new EventEmitter();
  generos = [
    {
      id: 1,
      nombre: 'Masculino'
    },
    {
      id: 2,
      nombre: 'Femenino'
    },
    {
      id: 3,
      nombre: 'Otro'
    },
    {
      id: 4,
      nombre: 'Prefiero no decirlo'
    }
  ]

  form: FormGroup = this.fb.group({
    //clienteid: [0, Validators.required],
    nombres: ['', Validators.required],
    genero: [0, Validators.required],
    edad: [0, [Validators.required, Validators.min(0)]],
    identificacion: ['', [Validators.required]],
    direccion: ['', [Validators.required, Validators.min(0)]],
    telefono: ['', Validators.required],
    clave: ['', Validators.required],
    estado: [true, Validators.required],

  })
  constructor(private fb: FormBuilder,
    private clienteService: ClienteService,
    private notificacionService: NotificacionService,
    private modal: NgbModal) { }

  ngOnInit(): void {
  }

  guardar() {
    this.clienteService.CrearCliente(this.form.value).subscribe(dataOperacion => {      
      this.passEntry.emit(true);
    }, () => {this.passEntry.emit(false);
    }    
    );
    this.modal.dismissAll();   
  }
}
