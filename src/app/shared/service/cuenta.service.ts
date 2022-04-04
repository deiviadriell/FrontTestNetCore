import { Injectable } from '@angular/core';
import { CrudService } from './crud.service';
import { Cuenta, Cuentas, CuentasCliente } from '../interfaces/cuenta';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CuentaService {
  constructor(private crudService: CrudService) {
  }/***
   * Obtener Cuentas
   */
  ObtenerCuentas(): Observable<Cuentas[]> {
    return this.crudService.get('Cuentas', {})
  }

  ObtenerCuentasPorIdCliente(idCliente: number): Observable<CuentasCliente[]> {
    return this.crudService.get(`Cuentas/cliente/${idCliente}`, {})
  }

  /***
   * Obtener Cuenta - Por Identificador
   * @param idCuenta Identificador Cuenta
   * @constructor
   */
  ObtenerCuentaPorId(idCuenta: number): Observable<Cuenta> {
    return this.crudService.get(`Cuentas/${idCuenta}`)
  }  

  /***
   * Crear Cuenta
   * @param data Datos Cuenta
   * @constructor
   */
  CrearCuenta(data: Cuenta) {
    return this.crudService.post(`Cuentas`, data)
  }

  /***
   * Actualizar Cuentas
   * @param idCuenta Identificador Cuenta
   * @param data Datos Cuenta
   * @constructor
   */
  ActualizarCuenta(idCuenta: number, data: Cuenta) {
    return this.crudService.put(`Cuentas/${idCuenta}`, data)
  }

  /***
   * Eliminar Cuenta
   * @param idCuenta Identificador Cuenta
   * @constructor
   */
  EliminarCuenta(idCuenta: number) {
    return this.crudService.delete(`Cuentas/${idCuenta}`)
  }
}