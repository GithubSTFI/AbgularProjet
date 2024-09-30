import { Injectable } from "@angular/core";
import { Event } from "../models/event.model";
import { LikeType } from "../models/like-type.type";


@Injectable({
    providedIn: 'root'
})
export class EventService {
    private events: Event[] = [

        new Event(
            1,
            'Journée de Maintenance',
            'Journee offerte par l université des Monatgnes',
            'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
            new Date(),
            0,
            true
        ),
        new Event(
            2,
            'Excursion academique',
            'Sortie à Dschang et Bafoussam',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
            new Date(),
            10,
            false

        ),
        new Event(
            3,
            'Presentation des Samedi',
            'Tous les stagiaires presentes leur etats d avancement',
            'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
            new Date(),
            30,
            true
        ),
        new Event(
            4,
            'MAtch du Dimache',
            'Detente pour prendre les forces',
            'https://img.freepik.com/photos-gratuite/joueurs-football-action-stade-professionnel_654080-1130.jpg?uid=R106373644&ga=GA1.1.1639299822.1687776129&semt=ais_hybrid',
            new Date (),
            50,
            true
        ),
        new Event(
            5,
            'Soiree du pairrainage',
            'Divertissement ',
            'https://img.freepik.com/photos-premium/gens-concert-musique-eclaire-nuit_1048944-28427103.jpg?uid=R106373644&ga=GA1.1.1639299822.1687776129&semt=ais_hybrid',
            new Date (),
            104,
            false
        ),
        
        

    ];

    getEvents(): Event[] {
        return this.events
    }

    getEventById(eventId:number): Event {
        const foundEvent = this.events.find(event=> event.idEvent === eventId);
        if (!foundEvent) {
            throw new Error('Event not found!');
        }
        return foundEvent;
    }


    likeEventById(eventId: number, likeType: LikeType) : void {
        const event =this.getEventById(eventId)
        event.like(likeType);
    }

     // Ajouter un nouvel événement
    addEvent(newEvent: Event): void {
        this.events.push(newEvent);
    }
     
  
}