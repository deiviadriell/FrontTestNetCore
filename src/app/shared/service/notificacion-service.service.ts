import {Injectable} from '@angular/core';
import {SweetAlertOptions} from 'sweetalert2';

import swal2 from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class NotificacionService {

  constructor() {
  }
  /* Swal Confirmación */
  showSwalConfirm(options: Partial<SweetAlertOptions>): Promise<boolean> {
    return new Promise(resolve => {
      swal2.fire({        
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, Guardar Información',
        cancelButtonText: 'Cancelar',
        ...options
      }).then((response: any) => {
        if (response.value) {
          resolve(true);
        }
        resolve(false);
      });
    });
  }

  /* Swal Mensaje */
  showSwalMessage(options?: Partial<SweetAlertOptions>) {
    return swal2.fire({
      title: 'Proceso realizado exitosamente!',
      icon: 'success',
      showCancelButton: false,
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ok',
      ...options
    });
  }

  //#endregion
}