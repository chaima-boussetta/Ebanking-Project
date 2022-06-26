import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';

import {FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './Client/home/home.component';
import { FixeComponent } from './Client/fixe/fixe.component';
import { NavbarComponent } from './Client/navbar/navbar.component';
import { VirementComponent } from './Client/home/virement/virement.component';
import { HistoriqueComponent } from './Client/home/historique/historique.component';


import {MatTableModule} from '@angular/material/table';
import { ProfileComponent } from './Client/home/profile/profile.component';
import { PaiementComponent } from './Client/home/paiement/paiement.component';
import { ListeComponent } from './Client/home/paiement/liste/liste.component';
import { FormComponent } from './Client/home/paiement/form/form.component';
import { ValiderComponent } from './Client/home/paiement/valider/valider.component';
import { ConfirmerComponent } from './Client/home/paiement/confirmer/confirmer.component';
import { HomeAgentComponent } from './Agent/home-agent/home-agent.component';
import { ClientListComponent } from './Agent/home-agent/client-list/client-list.component';
import { ClientDetailsComponent } from './Agent/home-agent/client-details/client-details.component';
import { AddClientComponent } from './Agent/home-agent/add-client/add-client.component';
import { HomeadminComponent } from './Admin/homeadmin/homeadmin.component';
import { NavComponent } from './Admin/nav/nav.component';
import { FixeadminComponent } from './Admin/fixeadmin/fixeadmin.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './Admin/homeadmin/details/details.component';
import { FixeagentComponent } from './Agent/fixeagent/fixeagent.component';
import { NavagentComponent } from './Agent/navagent/navagent.component';

import { authInterceptorProviders } from './helpers/auth.interceptor';
import { CompComponent } from './comp/comp.component';
import { AddAggComponent } from './Admin/homeadmin/add-agg/add-agg.component';
import { AgentListComponent } from './agent-list/agent-list.component';
import { AggLisComponent } from './Admin/homeadmin/agg-lis/agg-lis.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    FixeComponent,
    NavbarComponent,
    VirementComponent,
    HistoriqueComponent,
    ProfileComponent,
    PaiementComponent,
    ListeComponent,
    FormComponent,
    ValiderComponent,
    ConfirmerComponent,
    HomeAgentComponent,
    ClientListComponent,
    ClientDetailsComponent,
    AddClientComponent,
    HomeadminComponent,
    NavComponent,
    FixeadminComponent,
    DetailsComponent,
    FixeagentComponent,
    NavagentComponent,
    CompComponent,
    AddAggComponent,
    AgentListComponent,
    AggLisComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    FormsModule,
    MatTableModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
