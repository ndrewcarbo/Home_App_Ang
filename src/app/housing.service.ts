import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  url = 'http://localhost:3000/locations'
  constructor() { }

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }
  // ORA OVUNQUE CHIAMEREMO QUESTO METODO NELL' APP AVREMO LA LISTA DELLE LOCATION 

  async getHousingLocationById(id:Number): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json()?? {};
    //return this.housingLocationList.find(housingLocation => housingLocation.id === id);
    // LA FUNZIONE RESTITUIRà LA PRIMA CORRISPONDENZA NELL'ARRAY
  }
  submitApplication(firstName:string, lastName:string,email:string){
    console.log(firstName,lastName,email);
  }
}





/* SERVICE 
==================================================================================================
IL DECORATORE INIETTABILE DICE AD ANGULAR CHE POSSIAMO USARE QUESTA CLASSE NEL SISTEMA DI INIEZIONE
DELL E DIPENDENZE 

IL CHE SIGNIFICA CHE ALTRE PARTI DELLA APP POSSONO RICHIEDERE UN ISTANZA DI QUESTO SERVIZIO 
LA PROPIETà provideIn DEI METADATI DEL DECORATORE INDICA AD ANGULAR DOVE NELL'APP PUò ESSERE INIETTATO
ROOT VUOLDIRE CHE PUò ESSERE  USATO IN TUTTA L'APP 

DOBBIAMO INVIARE I DATI DAL HOME COMPONENT AL SERVIZIO 
==================================================================================================
*/

/* ================================================================================================
PER PRIMA COSA IMPORTIAMO 1) L'INTERFACCIA DELL'UBICAZIONE DELL'ALLOGGIO 
2) AGGINGI UNA PROPIETà PROTECTED ALLA HOUSINGSERVICE chiamata housingLocatioList 
e il tipo è un array vuoto 
3) Dobbiamo popolare l'array con i dati li prenderemo dall'home copia e incolla
4) CREA 2 METODI PER IL SERVIZIO 

===================================================================================================*/ 