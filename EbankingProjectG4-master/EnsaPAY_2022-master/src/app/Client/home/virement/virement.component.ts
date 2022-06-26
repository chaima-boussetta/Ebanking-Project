import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
@Component({
  selector: 'app-virement',
  templateUrl: './virement.component.html',
  styleUrls: ['./virement.component.css']
})
export class VirementComponent implements OnInit {

 rib:String="";
 amount:Number=0;
 submitted:Boolean=false ;

  constructor(private clientService:ClientService) { }

  ngOnInit(): void {
  }
  
  get compte(){
    return this.clientService.compte;
  }

  debit(): void {
    console.log(this.compte.id+"   "+this.compte.balance);
    const data = {
      id: this.compte.id,
      balance: this.compte.balance
     
    };
    this.clientService.debit(this.compte.id,this.compte.balance,data )
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

}
