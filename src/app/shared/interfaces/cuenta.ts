import { Cliente } from './cliente';
import { TipoCuenta } from './tipoCuenta';
export interface Cuenta {
    idCuenta:           number;
    numero:             string;
    saldoInicial:       number;
    estado:             boolean;
    limiteRetiroDiario: number;
    cliente:            Cliente;
    idCliente:          number;
    tipoCuenta:         TipoCuenta;
    idTipoCuenta:       number;    
}


export interface Cuentas {
    numeroCuenta: string;
    tipo:         string;
    saldoInicial: number;
    estado:       boolean;
    cliente:      string;
}
export interface CuentasCliente {
    idCuenta: number;
    numero: string;
    
}
