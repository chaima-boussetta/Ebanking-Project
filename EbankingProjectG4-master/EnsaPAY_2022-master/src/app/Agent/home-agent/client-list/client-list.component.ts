import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  clients?: Client[];
  currentClient: Client = {};
  currentIndex = -1;
  firstname = '';
  id='';
  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.retrieveClients();
  }
  retrieveClients(): void {
    this.clientService.getAll()
      .subscribe({
        next: (data) => {
          this.clients = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  refreshList(): void {
    this.retrieveClients();
    this.currentClient = {};
    this.currentIndex = -1;
  }
  setActiveClient(client: Client, index: number): void {
    this.currentClient = client;
    this.currentIndex = index;
  }
  searchFirstname(): void {
    this.currentClient = {};
    this.currentIndex = -1;
    this.clientService.findByFirstname(this.id)
      .subscribe({
        next: (data) => {
          this.clients = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}
