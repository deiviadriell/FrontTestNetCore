import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from 'src/app/shared/service/cliente.service';
import { MovimientoI } from '../../shared/interfaces/movimiento';
import { Cliente } from 'src/app/shared/interfaces/cliente';
import { CuentaService } from '../../shared/service/cuenta.service';
import { CuentasCliente } from 'src/app/shared/interfaces/cuenta';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MovimientosService } from '../../shared/service/movimientos.service';

@Component({
  selector: 'app-new-edit',
  templateUrl: './new-edit.component.html',
  styleUrls: ['./new-edit.component.css']
})
export class NewEditComponent implements OnInit {
  @Input() movimientoEdit?: MovimientoI;  
  @Input() tituloModal: string = '';
  @Output() passEntry: EventEmitter<string> = new EventEmitter();  
  cuentas: CuentasCliente[] = [];
  clientes: Cliente[] = [];
  idCliente:  number = 0;
  constructor(private fb: FormBuilder,
    private clienteService: ClienteService,
    private cuentaService: CuentaService,
    private modal: NgbModal,
    private movimientoService: MovimientosService) { }

    
  form: FormGroup = this.fb.group({
    //clienteid: [0, Validators.required],
    idCuenta: [0, Validators.required],
    idTipoMovimiento: [0, Validators.required],    
    valor: [0, [Validators.required]],    
  })
  tipoMovimiento = [
    {
      id: 1,
      nombre: 'Deposito'
    },
    {
      id: 2,
      nombre: 'Retiro'
    }
    ]
  ngOnInit(): void {
    this.obtenerClientes();
  }

  obtenerClientes(){
    this.clienteService.ObtenerClientes().subscribe(clientes => {
      this.clientes = clientes;
    });
  }

  obtenerCuentasClientes(idCliente: number){
    this.cuentaService.ObtenerCuentasPorIdCliente(this.idCliente).subscribe(data => {
      this.cuentas = data;

    });
  }

  onChangeTratamiento($event: any) {
    this.obtenerCuentasClientes($event.clienteid);
    
  }
  guardar(){
    this.movimientoService.CrearMovimiento(this.form.value).subscribe(dataOperacion => {           
      this.passEntry.emit("ok");
    }, error => {     
      
      this.passEntry.emit(error.error);

    }
    );
    this.modal.dismissAll();   
    

  }

}
