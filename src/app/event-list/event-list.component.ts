import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { Event } from "../models/event.model";

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  likeButtonText!: string;
  userHasLiked!: boolean;
  
  Events!: Event[];

  constructor( private eventService: EventService) { }

  ngOnInit(): void {

    this.Events= this.eventService.getEvents();

    this.buttonLikeInterface();

  }
  private buttonLikeInterface() {
    
    this.userHasLiked= false;
  }

  onLike(event: Event): void {
    if(event.userHasLiked) {
      this.eventService.likeEventById(event.idEvent, 'unlike');
      event.userHasLiked= false;
      
    } else {
      this.eventService.likeEventById(event.idEvent, 'like');
      event.userHasLiked = true;
      
    }
  }

  onComment(event: Event): void {
    event.showCommentForm = !event.showCommentForm;  // pour afficher ou masquer le formulaire
  }
  
  addComment(event: Event): void {
    if (event.newComment) {
      // Vérifiez que 'comments' est bien un tableau, même si cela ne devrait jamais arriver après l'initialisation.
      event.comments = event.comments || [];  // Ceci est une sécurité supplémentaire
      event.comments.push(event.newComment);  // Ajoute le commentaire
      event.newComment = '';  // Réinitialise le champ de saisie après l'ajout du commentaire
    }
  }

  onShare(event: Event): void {
    if (navigator.share) {
      navigator.share({
        title: event.titleEvent,
        text: event.descriptionEvent,
        url: window.location.href // L'URL actuelle de l'application (vous pouvez la personnaliser)
      })
      .then(() => console.log('Event partagé avec succès!'))
      .catch((error) => console.error('Erreur lors du partage:', error));
    } else {
      console.error("Le partage n'est pas pris en charge dans ce navigateur.");
      alert("Le partage n'est pas pris en charge dans votre navigateur.");
    }
  }

}
