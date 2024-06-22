import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housing-location';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule,RouterModule],
  template: `
  <section class="listing">
    <img class="listing-photo" [src]="housingLocation.photo"
    alt="Exterior photo of {{housingLocation.name}}"> 
    <h2 class="listing-heading">{{housingLocation.name}}</h2>
    <p class="listing-location">{{housingLocation.city}},{{housingLocation.state}}</p>
    <a [routerLink]="['/details', housingLocation.id]">Più Informazioni</a>

    <!-- abbiamo bisogno di un modo per identificare su quale abitazione l'utente ha cliccato in modo da visualizzare i dati in modo corretto
    
    - POSSIAMO PASSARE I DATI DIRETTAMENTE AL PERCORSO TRAMITE ROUTER
    COME LA POSSIBILITà DI PASSARE STATO E DATI A UN PERCORSO 

    - OPPURE POSSIAMO PASSARE UNA SORTA DI IDENTIFICATORE TRAMITE L'URL E QUINDI FARE RIFERIMENTO 
    ALL' UBICAZIONE DELL'ALLOGGIO TRAMITE L'id (utilizzato)

    vedi sopra (utilizzato property binding a routerLink), aggiorniamo il valore di questa property
    binding in un ARRAY con la prima voce che sara /details e la seconda, housingLocation.id 
    
    -->
  </section>
  `,
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;  //1) //2)  //INPUTPROPERTIES
}

/* l'attributo src è racchiuso tra [] che è una funzionalita chiamata
PROPERTY BINDING 
=====================================================================
{{}} INTERPOLAZIONE IN ANGULAR
*/

/*===================================================================================
HO CREATO PER IL COMPONENTE DEI RISULTATI DEI SEGNAPOSTO CHE ANDREMO A RIEMPIRE PASSANDO 
DEI DATI UTILIZZANDO LE INPUT PROPERTIS.
GENERATO UN INTERFACE CON IL COMANDO ng generate interface housingLocation

===================================================================================== */

/* ==================================================================================
//1) INPUTPROPERTIES
MARCANDO UNA PROPIETA DEL COMPONENTE CON IL DECORATORE INPUT QUESTO DICE AD ANGULAR CHE UNA PROPIETà PUO 
ESSERE IMPOSTATA IN UN TEMPLATE, aggiorniamo l'import aggiungendo Input a angular/core

nb: @ la chiocciola contraddistingue il decoratore prima del nome e subito dopo le ()
//2) il punto esclamativo è chiamato operatore di asserzione non NUll
questo fa capire a TS che il valore di questa propietà non sara null o undefined
=====================================================================================*/ 


/* =======================================================================================

LINKS

IN HOUSING-LOCATION DOBBIAMO AGGIONARE LA PROPIETà DEL MODELLO DEI METADATI DEL DECORSATORO
E INCLUDERE UN ELEMENTO DI ANCORAGGIO COME FIGLIO DELLA SEZIONE.
INVECE DI UTILIZZARE UN hREF ALL' ELEMENTO DI ANCORAGGIO AGGIUNGEREMO UNA DIRETTIVA DI COLLEGAMENTO 
DEL ROUTER 
QUESTA DIRETTIVA CI CONSENTIRà DI ESTENDERE LA FUNZIONALITà DELL' ELEMENTO 
========================================================================================== */

/* =======================================================================================
Links 2 procedimento

aggiungiamo agli import e all'arrai imports nei metadati il RouterModule,
e come ultimo figlio della sezione mettiamo la nostra a (link) e invece di Href
mettiamo routerLink="details"


==============================================================================================
*/ 