import { Component, Inject, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housing-location';
import { FormControl,FormGroup,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  template: `
    <article>
      <img class="listing-photo" [src]="housingLocation?.photo">
      <section class="listing-description">
        <h2 class="listing-heading">{{housingLocation?.name}}</h2>
        <p class="listing-location">{{housingLocation?.city}},{{housingLocation?.state}}</p>
      </section>
      <section class="listing-features">
        <h2 class="section-heading">Descrizione Casa</h2>
        <ul>
          <li>Units avaibles: {{housingLocation?.availableUnits}}</li>
          <li>wi-fi: {{housingLocation?.wifi}}</li>
          <li>laundry: {{housingLocation?.laundry}}</li>
        </ul>
      </section>
      <section class="listing-apply">
            <h2 class="section-heading">Prendi Appuntamento per una visita</h2>
            <form [formGroup]="applyForm" (submit)="submitApplication()">
              <label for="first-name">Nome</label>
              <input id="first-name" type="text" formControlName="firstName">

              <label for="last-name">Cognome</label>
              <input id="last-name" type="text" formControlName="lastName">

              <label for="email">Email</label>
              <input id="email" type="email" formControlName="email">
              <button class="primary" type="submit">Visita Ora</button>
            </form>
      </section>
    </article>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService); 
  housingLocation: HousingLocation | undefined;
  applyForm = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    email: new FormControl(""),
  });

  constructor() {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    //this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
    this.housingService.getHousingLocationById(housingLocationId).then(housingLocation => {
      this.housingLocation = housingLocation;
    })
  }
  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email?? '',
    );
  }
}



/* =====================================================================================
Una volta ottenuto il componente dobbiamo apportare delle modifiche in particolare 2
1) aggiungiamo una rotta al file routes.ts 
2) aggiungeremo un collegamento alla pagina dettagli LINK
========================================================================================*/


/* =======================================================================================

LINKS

IN HOUSING-LOCATION DOBBIAMO AGGIONARE LA PROPIETà DEL MODELLO DEI METADATI DEL DECORSATORO
E INCLUDERE UN ELEMENTO DI ANCORAGGIO COME FIGLIO DELLA SEZIONE.
INVECE DI UTILIZZARE UN hREF ALL' ELEMENTO DI ANCORAGGIO AGGIUNGEREMO UNA DIRETTIVA DI COLLEGAMENTO 
DEL ROUTER 
QUESTA DIRETTIVA CI CONSENTIRà DI ESTENDERE LA FUNZIONALITà DELL' ELEMENTO 
========================================================================================== */

/*========================================================================================
INJECT 

importiamo nei component Inject E ActivatedRoute 
nel corpo della classe aggiungeremo una rotta della classe di propietà di tipo rotta attivata
il percorso attivato è un riferimento al percorso corrente con cui siamo confrontati nell ' applicazione

inoltre creo una variabile legata all' id di housinglocation e imposto il valore a 0 

successivamnete creo un metodo che non accetti parametri denominato constructor 
assegno all'ID COSI CI ASPETTIAMO UN VALORE NUMERICO DELL'ID 

==========================================================================================*/

/* =======================================================================================
importiamo l'interface e il servizio,  ppoi aggiungiamo la refernza ai servizi al corpo della classe
con  housingService = inject(HousingService);
housingLocation: HousingLocation | undefined;  

cambiamo this.housingLocationId in UNA CONST 
il tutto diventerà
this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
========================================================================================== */

/*========================================================================================
FORMS 
import { FormControl,FormGroup,ReactiveFormsModule } from '@angular/forms';
anche nell' imports 
nel corpo della classe
nuova propietà 
applyForm = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    email: new FormControl(""),
  });



==========================================================================================*/ 