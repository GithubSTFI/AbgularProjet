export class location {
    constructor(
      public namelieu: string,
      public descriptionlieu: string,
      public type: 'Privé' | 'Public',  // Correctement aligné avec le formulaire
      public etat: 'occupé' | 'libre'
    ) {}
  }
  