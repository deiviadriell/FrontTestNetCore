import { Component, OnInit } from '@angular/core';
import { debounceTime, of, startWith, Subject, switchMap, takeUntil, tap } from 'rxjs';
import { Cliente } from '../../shared/interfaces/cliente';
import { ClienteService } from '../../shared/service/cliente.service';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { NewEditComponent } from '../new-edit/new-edit.component';
import { FormBuilder } from '@angular/forms';
import { NotificacionService } from '../../shared/service/notificacion-service.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  clientes: Cliente[] = [];
  listItems$: Subject<string> = new Subject<string>()
  destroy$: Subject<boolean> = new Subject<boolean>()
  loading: boolean = false;
  constructor(private clienteService: ClienteService,
    private modal: NgbModal,
    private fb: FormBuilder,
    private notificacionService: NotificacionService) { }

  ngOnInit(): void {
    this.obtenerClientes();

  }
  obtenerClientes() {
    this.clienteService.ObtenerClientes().subscribe(clientes => {
      this.clientes = clientes;
    })
  }
  accion(cliente?: Cliente) {   
    
    const modalRef = this.modal.open(NewEditComponent,
      { size: 'lg' }
    );
    modalRef.componentInstance.tituloModal = cliente ? 'Editar Cliente' : 'Registrar Cliente'
    modalRef.componentInstance.clienteEdit = cliente
    modalRef.componentInstance.passEntry.subscribe((respuesta: boolean) => {
      this.obtenerClientes();
      if(respuesta){
        this.notificacionService.showSwalMessage({
          title: 'Operación Realizada exitosamente!',
          timer: 3000,
        })
      }      
    });
  }


}
