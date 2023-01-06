import { Component, OnInit } from '@angular/core';

interface Card{
  titulo:string;
  subtitulo:string;
  nro?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{

  public title:string = 'primerApp';
  public second_title:string = 'Aprendiendo Angular';
  public arregloCards: Card[] = [];


  ngOnInit(): void {
    this.arregloCards = [
      {titulo: 'el hombre que camina', subtitulo: 'camino en el agua' },
      {titulo: 'el hombre que codea', subtitulo: 'codea en el agua', nro: 566 },
      {titulo: 'el hombre que mira', subtitulo: 'mira en el agua' },
    ]
  }

}
