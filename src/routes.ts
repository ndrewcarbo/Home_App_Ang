import { Routes } from "@angular/router";
import { HomeComponent } from "./app/home/home.component";
import { DetailsComponent } from "./app/details/details.component";

const routeConfig: Routes = [
    {
        path:'',
        component: HomeComponent,
        title: 'Home Page'
    },
    {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'Details Page'
    }
];

export default routeConfig;


/* ==========================================================================
importo Routes da @angular/router, anche L'homeComponent
creare una costante alla quale assegnamo il tipo Routes e sarà un array vuoto


creo un  export-line perche abbiamo bisogno che la variabile di configurazione
del percorso predefinito, dobbiamo aggiornare l'applicazione in base al percorso 
corrente 

=============================================================================*/ 

/* Link 3 /DETAILS
==============================================================================
NELLA ROUTES DI DETTAGLIO IMPOSTIAMO LA PROPIETà DEL PERCORSO SUI DETTAGLI DELL'ID 
LA PARTE DEI :ID è UN SEGNAPOSTO PER IL VALORE DEL PARAMETRO NEGLI URL CHE CORRISPONDONO 
A QUESTA ROTTA
==============================================================================
 */