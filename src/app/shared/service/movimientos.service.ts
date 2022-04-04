import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movimiento, MovimientoI } from '../interfaces/movimiento';
import { CrudService } from './crud.service';

@Injectable({
  providedIn: 'root'
})
export class MovimientosService {

  constructor(private crudService: CrudService) {
  }/***
   * Obtener Movimientos
   */
  ObtenerMovimientos(): Observable<Movimiento[]> {
    return this.crudService.get('Movimientos', {})
  }

  ObtenerUltimosMovimientos(): Observable<Movimiento[]> {
    return this.crudService.get('Movimientos/UltimosMovimientos', {})
  }

  /***
   * Obtener Movimiento - Por Identificador
   * @param idMovimiento Identificador Movimiento
   * @constructor
   */
  ObtenerMovimientoPorId(idMovimiento: number): Observable<Movimiento> {
    return this.crudService.get(`Movimientos/${idMovimiento}`)
  }  

  /***
   * Crear Movimiento
   * @param data Datos Movimiento
   * @constructor
   */
  CrearMovimiento(data: MovimientoI) {
    return this.crudService.post(`Movimientos`, data)
  }

  /***
   * Actualizar Movimientos
   * @param idMovimiento Identificador Movimiento
   * @param data Datos Movimiento
   * @constructor
   */
  ActualizarMovimiento(idMovimiento: number, data: Movimiento) {
    return this.crudService.put(`Movimientos/${idMovimiento}`, data)
  }

  /***
   * Eliminar Movimiento
   * @param idMovimiento Identificador Movimiento
   * @constructor
   */
  EliminarMovimiento(idMovimiento: number) {
    return this.crudService.delete(`Movimientos/${idMovimiento}`)
  }
}