import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente.model';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CorreoService {

  constructor(private http: HttpClient) { }



  sendEmail(message: Cliente): Observable<Cliente> | any {
    console.log(message);
    return this.http.post("assets/email.php", message).pipe(
      map(response => {
        console.log("Correo enviado", response);
        return response;
      }),
      catchError(error => {
        console.log("Error al enviar el correo", error);
        return Observable.throw(error);
      })
    );
  }
}



