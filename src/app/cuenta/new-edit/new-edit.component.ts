import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Cuenta } from 'src/app/shared/interfaces/cuenta';
import { NotificacionService } from 'src/app/shared/service/notificacion-service.service';
import { CuentaService } from '../../shared/service/cuenta.service';
import { ClienteService } from '../../shared/service/cliente.service';
import { Cliente } from 'src/app/shared/interfaces/cliente';

@Component({
  selector: 'app-new-edit',
  templateUrl: './new-edit.component.html',
  styleUrls: ['./new-edit.component.css']
})
export class NewEditComponent implements OnInit {
  @Input() cuentaEdit?: Cuenta;  
  @Input() tituloModal: string = '';
  @Output() passEntry: EventEmitter<boolean> = new EventEmitter();

  tipoCuenta = [
    {
      id: 1,
      nombre: 'Ahorros'
    },
    {
      id: 2,
      nombre: 'Corriente'
    }
    ]
  clientes: Cliente[] = [];
  form: FormGroup = this.fb.group({
    //clienteid: [0, Validators.required],
    idCuenta: [0, Validators.required],
    idCliente: [0, Validators.required],
    idTipoCuenta: [0, [Validators.required, Validators.min(0)]],
    limiteRetiroDiario: [0, [Validators.required]],
    numero: ['', [Validators.required, Validators.min(0)]],
    saldoInicial: [0, Validators.required],
    estado: [true, Validators.required], 
  })
  
  constructor(private fb: FormBuilder,
    private cuentaService: CuentaService,
    private notificacionService: NotificacionService,
    private modal: NgbModal,
    private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.obtenerClientes();
  }
  guardar() {    
    this.cuentaService.CrearCuenta(this.form.value).subscribe(dataOperacion => {           
      this.passEntry.emit(true);
    }, () => {this.passEntry.emit(false);
    }    
    );
    this.modal.dismissAll();   
  }

  obtenerClientes(){
    this.clienteService.ObtenerClientes().subscribe(clientes => {
      this.clientes = clientes;
    });
  }
  
}
