import { Injectable } from '@angular/core';

export interface Heroe {
  name : string,
  gender: string,
  description: string,
}

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private heroes : Array<Heroe>  = [
    
      { gender: 'Hombre', name: 'Ureña Gómez, Fernando', description: 'Instructor Udemy' },
      { gender: 'Mujer', name: 'Pérez Almendro, Maria', description: 'Amiga de la infancia' },
      { gender: 'Hombre', name: 'Caballero Sánchez, Federico', description: 'Compañero de trabajo' },

    
  ];

  public getHeroes  = () : Array<Heroe> => {
    return this.heroes;
  }

  constructor() { }
}
