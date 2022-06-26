import { Component, OnInit } from '@angular/core';

export interface HistoriqueElement{
  Id:number;
  date:string;
  operation:string;
}

 const EmpData : HistoriqueElement[] = [
  {
    Id:1,date:'12/06/2022', operation:'received 120$'
  },
  {
    Id:2,date:'12/06/2022', operation:'received 120$'
  },
  {
    Id:3,date:'12/06/2022', operation:'received 120$'
  },
];

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent /*implements OnInit*/ {

 dataSource = EmpData;

  //constructor() { }

  /*ngOnInit(): void {
  }*/

}
