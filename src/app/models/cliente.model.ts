export class Cliente {
    constructor(
      public nombreEmpresa: string,
      public nit: number,
      public nombre: string,
      public tel: number,
      public correo: string,
      public comentarios: string,
      public origen?: string,
      public destino?: string,
      public servicio?: string 
    ) {}
  }
  