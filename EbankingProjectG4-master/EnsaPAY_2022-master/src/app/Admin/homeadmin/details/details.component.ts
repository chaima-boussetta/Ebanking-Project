import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Agent } from 'src/app/models/agent';
import { AgentService } from 'src/app/services/agent.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() viewMode = false;
  @Input() currentAgent: Agent = {
    firstname:'',
    lastname: '',
    phone: '',
    email: '',
    
    pieceIdentity: '',
    n_pieceIdentity: '',
    address:''
  };
  
  message = '';
  constructor(
    private AgentService: AgentService,
    private route: ActivatedRoute,
    private router: Router) { }
  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getAgent(this.route.snapshot.params["id"]);
    }
  }
  getAgent(id: string): void {
    this.AgentService.get(id)
      .subscribe({
        next: (data) => {
          this.currentAgent = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updateAgent(): void {
    this.message = '';
    this.AgentService.update(this.currentAgent.id, this.currentAgent)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This Agent was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

}
