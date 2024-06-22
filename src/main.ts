import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import routeConfig from './routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routeConfig)
  ]
}).catch(err => console.error(err));


/*==========================================================================================
1)impotiamo provideRouter e nell boostrapApplication aggiungiamo un letterale come parametro 
nel letterale che è un array aggiungiamo una propietà PROVIDERS CHE CONTIENE UN METODO
provideRouter che rappresenta i percorsi della NOSTRA APP



2)importiamo la costante da routeConfig e nel provideRouter come parametro passeremo propio la costante
============================================================================================ */