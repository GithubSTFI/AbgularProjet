import { Component, InjectionToken, OnInit, ViewChild } from '@angular/core';
import { Event } from "../models/event.model";
import { EventService } from '../services/event.service';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category.model';
import { location } from '../models/location.model';
import { LocationService } from '../services/location.service';
import { FormBuilder, FormGroup,  } from '@angular/forms';
import { MatDrawer } from '@angular/material/sidenav';
import { MatTabLabel } from '@angular/material/tabs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  showFiller = false;
  drawerOpened: boolean = false; // Variable pour suivre l'état du drawer
  selectedTab: number=0;

  @ViewChild('drawer') drawer!: MatDrawer;
  selectedForm: string | null = null;
  
  // Cette méthode prend en paramètre une string
  openForms(formType: string) {
    this.selectedForm = formType;
    this.drawer.open();
    this.drawerOpened = true;
  }

  // Fonction pour fermer le tiroir
  closeDrawer(): void {
    this.drawer.close();
    this.drawerOpened = false;
    this.selectedForm = null; // Réinitialiser le formulaire sélectionné
  } 

  eventForm!: FormGroup;
  categoryForm!: FormGroup;
  locationForm!: FormGroup;

  Events!: Event[];
  category!: Category[];
  localisation!: location[]; 

  constructor( private eventService: EventService,
               private  CategoryService: CategoryService,
               private locationService: LocationService,
              private fb: FormBuilder,) { }

  ngOnInit(): void {

    this.Events= this.eventService.getEvents();
    this.category= this.CategoryService.getcategories();
    this.localisation= this.locationService.getLocation();

    
  }

  

  

  

 
  
  

  
  

}



