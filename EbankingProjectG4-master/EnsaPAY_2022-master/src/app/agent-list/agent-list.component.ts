import { Component, OnInit } from '@angular/core';
import { Agent } from 'src/app/models/agent';
import { AgentService } from 'src/app/services/agent.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agent-list',
  templateUrl: './agent-list.component.html',
  styleUrls: ['./agent-list.component.css']
})
export class AgentListComponent implements OnInit {

  agents?: Agent[];
  currentAgent: Agent = {};
  currentIndex = -1;
  firstname = '';
  constructor(private agentService: AgentService) { }
  ngOnInit(): void {
    this.retrieveAgents();
  }
  retrieveAgents(): void {
    this.agentService.getAll()
      .subscribe({
        next: (data) => {
          this.agents = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  refreshList(): void {
    this.retrieveAgents();
    this.currentAgent = {};
    this.currentIndex = -1;
  }
  setActiveAgent(agent: Agent, index: number): void {
    this.currentAgent = agent;
    this.currentIndex = index;
  }
  searchFirstname(): void {
    this.currentAgent = {};
    this.currentIndex = -1;
    this.agentService.findByFirstname(this.firstname)
      .subscribe({
        next: (data) => {
          this.agents = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}
