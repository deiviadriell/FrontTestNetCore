import { Component, OnInit } from '@angular/core';
import { MovimientosService } from '../../shared/service/movimientos.service';
import { Movimiento, MovimientoI } from '../../shared/interfaces/movimiento';
import { FormBuilder } from '@angular/forms';
import { NotificacionService } from 'src/app/shared/service/notificacion-service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewEditComponent } from '../new-edit/new-edit.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  movimientos: Movimiento[] = [];

  constructor(private movimientosService: MovimientosService,    
    private modal: NgbModal,
    private fb: FormBuilder,
    private notificacionService: NotificacionService) { }

  ngOnInit(): void {
    this.obtenerUltimosMovimientos();
  }

  obtenerUltimosMovimientos(){
    this.movimientosService.ObtenerUltimosMovimientos().subscribe(movimientos => {
      this.movimientos = movimientos;
    });
  }
  accion(movimiento?: MovimientoI) {  
    
    const modalRef = this.modal.open(NewEditComponent,
      { size: 'lg' }
    );
    modalRef.componentInstance.tituloModal = movimiento ? 'Editar Movimiento' : 'Registrar Movimiento'
    modalRef.componentInstance.cuentaEdit = movimiento;
    modalRef.componentInstance.passEntry.subscribe((respuesta: string) => {
      this.obtenerUltimosMovimientos();
      if(respuesta == "ok"){
        this.notificacionService.showSwalMessage({
          title: 'Operación Realizada exitosamente!',
          timer: 3000,
        })
      }  
      else {
        this.notificacionService.showSwalMessage({
          title: respuesta,
          timer: 3000,
        })

      }    
    });
  }

}
