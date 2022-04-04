import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../interfaces/cliente';
import { CrudService } from './crud.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private crudService: CrudService) {
  }/***
   * Obtener Clientes
   */
  ObtenerClientes(): Observable<Cliente[]> {
    return this.crudService.get('Clientes', {})
  }

  /***
   * Obtener Cliente - Por Identificador
   * @param idCliente Identificador Cliente
   * @constructor
   */
  ObtenerClientePorId(idCliente: number): Observable<Cliente> {
    return this.crudService.get(`Clientes/${idCliente}`)
  }  

  /***
   * Crear Cliente
   * @param data Datos Cliente
   * @constructor
   */
  CrearCliente(data: Cliente) {
    return this.crudService.post(`Clientes`, data)
  }

  /***
   * Actualizar Clientes
   * @param idCliente Identificador Cliente
   * @param data Datos Cliente
   * @constructor
   */
  ActualizarCliente(idCliente: number, data: Cliente) {
    return this.crudService.put(`Clientes/${idCliente}`, data)
  }

  /***
   * Eliminar Cliente
   * @param idCliente Identificador cLIENTE
   * @constructor
   */
  EliminarCliente(idCliente: number) {
    return this.crudService.delete(`Clientes/${idCliente}`)
  }
}