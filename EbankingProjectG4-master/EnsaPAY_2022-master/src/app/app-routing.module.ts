import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from './register/register.component';
import { HomeComponent } from './Client/home/home.component';
import { VirementComponent } from './Client/home/virement/virement.component';
import { HistoriqueComponent } from './Client/home/historique/historique.component';
import { ProfileComponent } from './Client/home/profile/profile.component';
import { PaiementComponent } from './Client/home/paiement/paiement.component';
import { ListeComponent } from './Client/home/paiement/liste/liste.component';
import { FormComponent } from './Client/home/paiement/form/form.component';
import { ValiderComponent } from './Client/home/paiement/valider/valider.component';
import { ConfirmerComponent } from './Client/home/paiement/confirmer/confirmer.component';
import { HomeadminComponent } from './Admin/homeadmin/homeadmin.component';
import { AgentsListComponent } from './Admin/homeadmin/agents-list/agents-list.component';
import { AddAgentComponent } from './Admin/homeadmin/add-agent/add-agent.component';
import { DetailsComponent } from './Admin/homeadmin/details/details.component';
import { ClientListComponent } from './Agent/home-agent/client-list/client-list.component';
import { AddClientComponent } from './Agent/home-agent/add-client/add-client.component';
import { ClientDetailsComponent } from './Agent/home-agent/client-details/client-details.component';
import { HomeAgentComponent } from './Agent/home-agent/home-agent.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AddAggComponent } from './Admin/homeadmin/add-agg/add-agg.component';
import { AggLisComponent } from './Admin/homeadmin/agg-lis/agg-lis.component';

const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: HomeComponent, children:[
    {path:'virement', component:VirementComponent},
    {path:'historique', component:HistoriqueComponent},
    {path:'profile',component:ProfileComponent},
    {path:'paiement', component:PaiementComponent,children:[
      {path:'liste', component:ListeComponent},
      {path:'form', component:FormComponent},
      {path:'valider', component:ValiderComponent},
      {path:'confirmer', component:ConfirmerComponent}
    ]},
  ]},
  {path:'', redirectTo: '/register', pathMatch: 'full'},
  {path:'homeagent' , component:HomeAgentComponent,children:[
    {path:'clients', component:ClientListComponent},
    {path:'addclient',component:AddClientComponent},
    {path:'clientdetails',component:ClientDetailsComponent},
    
  ]},
  {path:'homeadmin', component:HomeadminComponent ,children:[
    {path:'agents',component:AggLisComponent },
    {path:'details', component:DetailsComponent},
    {path:'addagentt',component:AddAggComponent}
  ]}

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule,FormsModule,BrowserModule],
  exports: [RouterModule],
  

   
})
export class AppRoutingModule { }
