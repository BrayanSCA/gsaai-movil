export class Datos{
    di: any
    contrasena: string

    constructor(di:any, contrasena:string){
        this.di = parseInt(di)
        this.contrasena = contrasena
    }
}
export interface Iloginform{
    documento:string
    contrasena: string
}
