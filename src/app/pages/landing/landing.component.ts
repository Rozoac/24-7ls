import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { NguCarouselConfig, NguCarouselStore } from '@ngu/carousel';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';
import { FormularioComponent } from './modal/formulario/formulario.component';
import {trigger, state, style, animate, transition } from '@angular/animations'; 
import { Contacto } from '../../../../../ecuador/src/app/models/contacto.model';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
  
})
export class LandingComponent implements OnInit {
  public carouselTile: NguCarouselConfig;
  public contador = 0;
  constructor(public dialog: MatDialog, public el: ElementRef){

  }
  
  @HostListener("window:scroll", ['$event'])
  doSomethingOnWindowsScroll($event:Event){
    let scrollOffset = $event.srcElement.children[0].scrollTop;
    // console.log("window scroll: ", scrollOffset);
    
    if(scrollOffset > 300 && this.contador < 1){
      console.log(this.contador);
      this.contador = this.contador + 1;
      return this.mostrarModal();
     }
  }


  
  ngOnInit() {
    
  }

  mostrarModal(){
    document.getElementById("resultado").classList.remove('add');

  }
  cerrar(){
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
