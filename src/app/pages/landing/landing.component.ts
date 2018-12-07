import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { NguCarouselConfig, NguCarouselStore } from '@ngu/carousel';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';
import { FormularioComponent } from './modal/formulario/formulario.component';
import {trigger, state, style, animate, transition } from '@angular/animations'; 


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
  
})
export class LandingComponent implements OnInit {
  public carouselTile: NguCarouselConfig;
  constructor(public dialog: MatDialog, public el: ElementRef){

  }

  @HostListener('window:scroll', ['$event'])
  
  ngOnInit() {
    this.checkScroll()
  }

  mostrarModal(){
    console.log('entro');
    document.getElementById("resultado").classList.toggle('add');

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

  checkScroll() {
    let contador = 0;
    const componentPosition = this.el.nativeElement.offsetTop
    const scrollPosition:number = window.pageYOffset
    console.log(scrollPosition);
 console.log(contador+ "contador");
    if(contador < 1){
      if(scrollPosition > 515){
        contador = contador+1;
         this.mostrarModal();
       return;
       }
    }

  }

  /* It will be triggered on every slide*/

}
