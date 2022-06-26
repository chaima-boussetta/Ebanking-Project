import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  client: Client = {
    
    firstname:'',
    lastname: '',
    phone: '',
    email: '',
    confirmationEmail: '',
    dateOfBirth: '',
    pieceIdentity: '',
    n_pieceIdentity: '',
    address:''
  };
  submitted = false;
  constructor(private clientService: ClientService) { }
  

  ngOnInit(): void {

    const data = {
      firstname: this.client.firstname,
      lastname: this.client.lastname,
      phone: this.client.phone,
      email: this.client.email,
      dateOfBirth:this.client.dateOfBirth,
    confirmationEmail: this.client.confirmationEmail,
      pieceIdentity: this.client.pieceIdentity,
      n_pieceIdentity: this.client.n_pieceIdentity,
      address: this.client.address
    };
    this.clientService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }


  saveClient(): void {
    const data = {
      firstname: this.client.firstname,
      lastname: this.client.lastname,
      phone: this.client.phone,
      email: this.client.email,
      dateOfBirth:this.client.dateOfBirth,
    confirmationEmail: this.client.confirmationEmail,

      pieceIdentity: this.client.pieceIdentity,
      n_pieceIdentity: this.client.n_pieceIdentity,
      address: this.client.address
    };
    this.clientService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }
  newClient(): void {
    this.submitted = false;
    this.client = {
      firstname:'',
      lastname: '',
      phone: '',
      email: '',
      confirmationEmail: '',
      dateOfBirth: '',
      pieceIdentity: '',
      n_pieceIdentity: '',
      address:''
    };

  }

}