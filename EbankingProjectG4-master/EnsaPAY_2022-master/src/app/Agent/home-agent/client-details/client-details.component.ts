import { Component, OnInit,Input } from '@angular/core';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {

  @Input() viewMode = false;
  @Input() currentClient: Client = {
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
  
  message = '';
  bool : boolean = false;

  constructor(
    private ClientService: ClientService,
    private route: ActivatedRoute,
    
  ) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getClient(this.route.snapshot.params["id"]);
    }
  }
  getClient(id: string): void {
    this.ClientService.get(id)
      .subscribe({
        next: (data) => {
          this.currentClient = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updateClient(): void {
    this.message = '';
    this.ClientService.update(this.currentClient.id, this.currentClient)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This client was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }
  getData(): void{
    this.bool = true;
  }

}
