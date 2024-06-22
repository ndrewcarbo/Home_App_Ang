import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
@Component({
  standalone: true,
  selector: 'app-root',
  template: `<main>
      <header class="brand-name">
        <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
      </header>
      <section class="content">
      
      <!-- <app-home></app-home>   sostituisco l' app-home con il router-OUTLET-->
      <router-outlet></router-outlet>
      </section>
  </main>`,
  styleUrls: ['./app.component.css'],
  imports: [HomeComponent,RouterModule],
})
export class AppComponent {
  title = 'homes';
}


/*===================================================================================
IL COMPONENTE APP.COMPONENT è QUELLO CHE VIENE GENERATO CON IL PROGETTO 
NELLA PROPIETà TEMPLATE HO AGGIUNTO IL LOGO E LA SEZIONE DEDICATA AL COMPONENTE HOME
L'HO GENERATO CON IL COMANDO ng generate component Home --standalone --inline-template
GENERERà UN TEMPLATE MINIMALE, AGGIUNGENDO UN COMPONENTE DOBBIAMO IMPORTARLO ALL'INIZIO
E NELLA PROPIETà imports COME DIPENDENZA
===================================================================================== */

/*===================================================================================
Dobbiamo aggiornare l'applicazione in base al percorso corrente 
===================================================================================== */

/*===================================================================================
ROUTING
Dobbiamo aggiornare l'applicazione in base al percorso corrente 
IMPORTO sia import { RouterModule } from '@angular/router'; 
e aggiorno l'array do import dei metadati del component


===================================================================================== */

/*===================================================================================

CREO UN NUOVO COMPONENTE DETAILS CHE RAPPRESENTERA LA PAGINA DI DETTAGLIO PER OGNI
LOCATION 

ng g c details --standalone --inline-template

ng sta per angular
g per generare
c per componente
details per il nome del componente
standalone sta per componente autonomo
--inline-template sta per template inline

questa configurazione riduce il numero di file generati 

======================================================================================*/