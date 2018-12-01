import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { APP_ROUTING } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
import { NguCarouselModule } from '@ngu/carousel';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { FormularioComponent } from './pages/landing/modal/formulario/formulario.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    FormularioComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatDialogModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    APP_ROUTING,
    NguCarouselModule
  ],
  entryComponents: [FormularioComponent],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
