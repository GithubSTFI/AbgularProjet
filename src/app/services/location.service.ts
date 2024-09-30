import { Injectable } from "@angular/core";
import { location } from "../models/location.model";

@Injectable ({
    providedIn: 'root'
})
export class LocationService{
    private locations: location[]= [
        new location(
            'Parc Municipal', 
            'Grand parc avec aires de jeu', 
            'Public', 
            'libre'
        ),
        new location(
            'Salle de conférence', 
            'Salle climatisée avec projecteur', 
            'Privé', 
            'occupé'
        ),
        new location(
            'Salle de réunion 1', 
            'Salle équipée de vidéoprojecteur, capacité de 20 personnes', 
            'Privé', 
            'libre'
        ),
        new location(
            'Parc Municipal', 
            'Grand parc avec aires de jeu', 
            'Public', 
            'libre'
        ),
        new location(
            'Salle de conférence', 
            'Salle climatisée avec projecteur', 
            'Privé', 
            'occupé'
        ),
        new location(
            'Salle de réunion 1', 
            'Salle équipée de vidéoprojecteur, capacité de 20 personnes', 
            'Privé', 
            'libre'
        ),
        new location(
            'Parc Municipal', 
            'Grand parc avec aires de jeu', 
            'Public', 
            'libre'
        ),
        new location(
            'Salle de conférence', 
            'Salle climatisée avec projecteur', 
            'Privé', 
            'occupé'
        ),
        new location(
            'Salle de réunion 1', 
            'Salle équipée de vidéoprojecteur, capacité de 20 personnes', 
            'Privé', 
            'libre'
        )  

    ];

    getLocation(): location[] {
        return this.locations
    }

    // Ajouter un nouveau lieu
  addLocation(newLocation: location): void {
    this.locations.push(newLocation);
  }
}