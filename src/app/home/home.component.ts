import { Component , inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filtra per città" #filter>
        <button class="primary" type="button" (click)="filterResults(filter.value)">Cerca</button>
      </form>
    </section>
    <section class="results">

<!-- questo è chiamato angular template sintax creando una variabile modello chiamata 
 housingLocation che rappresenta una voce dell' elenco housingLocationList
 mentre il passaggio successivo consiste nel passare i dati housingLocation 
 ai componenti housing-location utilizzando gli input del componente -->
    
      <app-housing-location *ngFor="let housingLocation of filteredLocationList" [housingLocation]="housingLocation"></app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  filteredLocationList: HousingLocation[] = [];

  constructor() {
    //this.housingLocationList = this.housingService.getAllHousingLocations();
    this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[])=> {
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = this.housingLocationList;
    });
  }
  filterResults(text:string){
    if(!text) this.filteredLocationList = this.housingLocationList;

    this.filteredLocationList = this.housingLocationList.filter(housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase()));
  }

}
    

/* =================================================================
IN ANGULAR CI SONO LE DIRETTIVE CHE PERMETTONO DI AGGIUNGERE FUNZIONALITà AGGIUNTIVE
ngFor è UN ITERAZIONE (FOR)
  ==================================================================*/

/*===================================================================================
NEL SECONDO COMPONENTE HO AGGIUNTO NEL TEMPLATE DUE SEZIONI UNA PER LA RICERCA L'ALTRA
PER I RISULTATI, HO CREATO UN TERZO COMPONENTE PER I RISULTATI ED IMPORTATO COME IL PRECEDENTE
===================================================================================== */

/*====================================================================================
INTRODOTTO INTERFACCIA NELL'IMPORT, CREATO UN NUOVA PROPIETà nella classe HomeComponent
che è un' ARRAY CHE CONTIENE I DATI DELLE LOCATIONS 

======================================================================================*/ 


/* vedi Routing in main.ts */

/*======================================================================================

SERVICE 

importiamo il servizio aggiungiamo dopo aver eliminato l' array una nuova propietà
housingService: HousingService = inject(HousingService);

E aggiungiamo il costrutore funzione che non accetta parametri e aggiungiamo la logica per
popolare l'houseLocationList(vedi sotto)


constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
======================================================================================== */