import { Component, OnInit } from '@angular/core';
import { NguCarouselConfig, NguCarouselStore } from '@ngu/carousel';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';
import { FormularioComponent } from './modal/formulario/formulario.component';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  public carouselTile: NguCarouselConfig;

  constructor(public dialog: MatDialog){

  }
  
  ngOnInit() {
  
  }

  mostrarModal(){
    console.log('entro');
    document.getElementById("resultado").classList.add('add');

  }

  enviarMensaje(mensaje){
    let wp_mensaje = mensaje.path[0].value; 
    console.log(mensaje);
    let telefono:number = 573046706418;
     location.href = `https://wa.me/${telefono}?text=${wp_mensaje}`;
  }

  openDialog(nombre, imagen): void {
    const dialogRef = this.dialog.open(FormularioComponent, {
      width: '600px',
      data: { nombre, imagen }
    });

     dialogRef.afterClosed().subscribe(result => {
    
    });
  }

  /* It will be triggered on every slide*/

}
