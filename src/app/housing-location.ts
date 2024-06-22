export interface HousingLocation {
    id: number,
    name:string,
    city:string,
    state:string,
    photo:string,
    availableUnits:number,
    wifi:boolean,
    laundry:boolean,
}

/* ORA UTILIZZEREMO LE INPUT PROPERTIES PER PASSARE I DATI AI COMPONENTI E UTILIZZEREMO L'INTERFACCIA
PER FAR SAPERE AL COMPONENTE QUALE TIPO DI DATI ASPETTARSI */