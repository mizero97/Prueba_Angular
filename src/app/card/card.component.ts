import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  public image:string = "https://randomuser.me/api/portraits/men/53.jpg";
  public Titulo:string = "Titulo"
}
