import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Cliente } from '../../../../models/cliente.model';
import swal from "sweetalert2";
import { CorreoService } from '../../../../services/correo.service';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  nombre: any;
  tipos: any;
  forma: FormGroup;
  message: Cliente = {
    nombreEmpresa: '',
    nit: null,
    origen: '',
    destino: '',
    nombre: '',
    tel: null,
    correo: '',
    comentarios: ''
  };


  

  transportes = ['SELECCIONE','TRANSPORTE DE CARGA SECA','TRANSPORTE DE CONTENEDORES','TRANSPORTE REFRIGERADO', 'TRANSPORTE DE CARGA EXTRADIMESIONADA']
  gruas = ['SELECCIONE','GRÚA PH','GRÚA TELESCÓPICA','GRÚA DE GANCHO', 'GRÚA AUTODESCARGABLE', 'TELEHANDLER', 'MANLIFT']
  

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<FormularioComponent>, public _correo:CorreoService
  ) {
    this.forma = new FormGroup(
      {
        nombreEmpresa: new FormControl("", Validators.required),
        nit: new FormControl(
          "",[
            Validators.required,
            Validators.pattern("[0-9]{1,10}")
          ]
        ),
        servicio: new FormControl("", 
          Validators.required
          ),
        origen: new FormControl(
          "", Validators.required
        ),
        destino: new FormControl(
        "", Validators.required),
        nombre: new FormControl("", Validators.required),
        cliente: new FormControl("", Validators.required),
        tel: new FormControl("", [
          Validators.required,
          Validators.pattern("[0-9]{1,10}"),
          Validators.minLength(10)
        ]),
        correo: new FormControl("", [
          Validators.required,
          Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$")]),
        comentarios: new FormControl("")
      },
      {
        validators: this.validacionCampos(
          "servicio"
        )
      }
    );
   }


   

   validacionCampos(
    campo:string
  ) {
    return (group: FormGroup) => {
      let servicio = group.controls[campo].value;

      if (
        servicio !== ''
      ) {
        return null;
      }
      return {
        validado: true
      };
    };
  }

   

   sendEmail(message:Cliente){
     debugger
    if (!this.forma.value.nombreEmpresa || !this.forma.value.nit || !this.forma.value.nombre || !this.forma.value.tel || !this.forma.value.correo || !this.forma.value.nit ) {
      swal({
        type: "error",
        title: `campos por llenar`,
        showConfirmButton: true
      });
      return;
    }

    this._correo.sendEmail(message).subscribe(
      res=> {
      this.onNoClick()
      swal({
        type: "success",
        title: `Formulario Enviado`,
        showConfirmButton: true
      });
      console.log(res);
        this.forma.reset({
          nombreEmpresa: '',
          nit: null,
          origen: '',
          destino: '',
          nombre: '',
          tel: null,
          correo: '',
          comentarios: ''
        });
       
      },
      error => {
        swal({
          type: "error",
          title: `error ${error.message}`,
          showConfirmButton: true
          });
        }
        );
      }

  ngOnInit() {
    this.nombre = this.data.nombre;
    if(this.nombre === 'TRANSPORTE DE CARGA'){
      this.tipos = this.transportes
    }
    if(this.nombre === 'ALQUILER DE GRUAS Y OTRA MAQUINARIA AMARILLA'){
      this.tipos = this.gruas
    }
  }


  onNoClick(): void {
    this.dialogRef.close();
  }

}
