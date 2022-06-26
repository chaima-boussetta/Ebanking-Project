import { Component, OnInit } from '@angular/core';
import { PaimentService } from 'src/app/services/paiment.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  showCode:boolean=false;
  result:Number=0;
  constructor(private paimentService:PaimentService) { }
  get facture(){
    return this.paimentService.facture
  }
  ngOnInit(): void {
  }
  valider(){
    console.log(this.facture.id+"  ");
      this.paimentService.get(this.facture.id).subscribe({
      next: (data) => {
        this.result=data;
        console.log("yyyyy"+this.result);
      },
      error: (e) => console.error(e)
    });
return 0;
  }

id:Number=1;
  payer(){
    const data = {
      id:this.facture.id,
      montanat:this.facture.montant
    }

    console.log(this.facture.id+" fezfze g");
      this.paimentService.validPay(this.facture.id,data).subscribe({
      next: (data) => {
        this.result=data;
        console.log("yyyyy");
      },
      error: (e) => console.error(e)
    });
return 0;
  }

}
