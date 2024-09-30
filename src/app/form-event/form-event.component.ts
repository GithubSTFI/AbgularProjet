import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { EventService } from '../services/event.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';
import { Event } from "../models/event.model";

@Component({
  selector: 'app-form-event',
  templateUrl: './form-event.component.html',
  styleUrls: ['./form-event.component.scss']
})
export class FormEventComponent implements OnInit {
  
  eventForm!: FormGroup;
  eventPrevieuws$!: Observable<Event>;
  urlRegex!: RegExp;

  constructor( private formBuilder: FormBuilder,
               private eventService: EventService
  ) { }

  ngOnInit(): void {
    this.eventForm = this.formBuilder.group({
      
      titleEvent: [ null, Validators.required],
      descriptionEvent: [null, Validators.required],
      imageUrl: [null, [Validators.required, Validators.pattern(this.urlRegex)]],
      dateEventStart: [null, [Validators.required]],
      isPaid:[false]
      
    }, {
      updateOn:'blur'
    });

    this.eventPrevieuws$ = this.eventForm.valueChanges.pipe(
      map(eventValue => ({
        ...eventValue,
        likes: 0,
        idEvent:0
      }))
    );
    this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
  }

  onSubmitEvent(): void {
    if (this.eventForm.valid) {
      const newEvent: Event = {
        ...this.eventForm.value,
        likes: 0,                  // Initialiser à 0
        userHasLiked: false,        // Initialiser à faux
        comments: [],               // Initialiser avec un tableau vide pour les commentaires
        showCommentForm: false      // Initialiser à faux pour masquer le formulaire de commentaire
      };

      this.eventService.addEvent(newEvent);
      this.eventForm.reset();
    }                                                                                                                                                        
  }
  
  }
  
  


