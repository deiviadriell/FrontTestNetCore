export interface Movimiento {    
    fecha: Date;
    cliente: string;
    numeroCuenta: string;
    tipoCuenta: string;
    saldoInicial: number;
    tipoMovimiento: string;
    estado: boolean;
    movimiento: number;
    saldoDisponible: number;
}

export interface MovimientoI {
    idCuenta: number;
    idTipoCuenta: number;
    tipoMovimiento: number;
    fecha: Date;
    valor: number;
    saldo: number;
}
