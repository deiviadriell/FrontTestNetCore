import { Component, OnInit } from '@angular/core';
import { CuentaService } from '../../shared/service/cuenta.service';
import { Cuenta, Cuentas } from '../../shared/interfaces/cuenta';
import { NotificacionService } from 'src/app/shared/service/notificacion-service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';
import { NewEditComponent } from '../new-edit/new-edit.component';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  cuentas: Cuentas[] = [];


  constructor(private cuentaService: CuentaService,
    private modal: NgbModal,
    private fb: FormBuilder,
    private notificacionService: NotificacionService) { }

  ngOnInit(): void {
    this.obtenerCuentas();
  }
  obtenerCuentas(){
    this.cuentaService.ObtenerCuentas().subscribe(cuentas => {
      this.cuentas = cuentas;
    })
  }

  accion(cuenta?: Cuenta) {  
    
    const modalRef = this.modal.open(NewEditComponent,
      { size: 'lg' }
    );
    modalRef.componentInstance.tituloModal = cuenta ? 'Editar Cuenta' : 'Registrar Cuenta'
    modalRef.componentInstance.cuentaEdit = cuenta;
    modalRef.componentInstance.passEntry.subscribe((respuesta: boolean) => {
      this.obtenerCuentas();
      if(respuesta){
        this.notificacionService.showSwalMessage({
          title: 'Operación Realizada exitosamente!',
          timer: 3000,
        })
      }      
    });
  }

}
