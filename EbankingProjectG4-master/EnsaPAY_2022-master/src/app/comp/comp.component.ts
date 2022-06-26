import { Component, OnInit } from '@angular/core';
import { Agent } from 'src/app/models/agent';
import { FormsModule } from '@angular/forms';
import { AgentService } from 'src/app/services/agent.service';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.css']
})
export class CompComponent implements OnInit {

  
  ghita:String=""

  ngOnInit(): void {
  }
  submitted = false;
  constructor(private agentService: AgentService) { }


  get agent(){
  return this.agentService.agent;
}



  saveAgent(): void {
    console.log(this.agent);
    const data = {
      firstname: this.agent.firstname,
      lastname: this.agent.lastname,
      phone: this.agent.phone,
      email: this.agent.email,

      pieceIdentity: this.agent.pieceIdentity,
      n_pieceIdentity: this.agent.n_pieceIdentity,
      address: this.agent.address,
      dateOfBirth:this.agent.dateOfBirth,
      confirmationEmail:this.agent.confirmationEmail,
      n_Immatr:this.agent.n_Immatr,
      n_Pattente:this.agent.n_Pattente,
      pieceJointe:this.agent.pieceJointe
    };
    this.agentService.create(this.agent)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }
  
}
