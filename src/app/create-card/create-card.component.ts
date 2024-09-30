import { Component, OnInit,Output,Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.scss']
})
export class CreateCardComponent implements OnInit {

  @Output() openForm = new EventEmitter<string>();
  @Input() drawerOpened: boolean = false;

  

  constructor() { }

  subtitlecard!: string;
    titletextcard!: string;
  
    subtitltecard1!:string;
    titletextcard1!: string;
  
    subtitlecard2!:string;
    titletextcard2!:string

  ngOnInit(): void {

  
    this.subtitlecard='card Event';
    this.titletextcard =' Creer  Evennement';

    this.subtitltecard1='card category';
    this.titletextcard1='Creer category';

    this.subtitlecard2='card lieux';
    this.titletextcard2='Ajouter lieux';
  }
 // Fonction qui émet une chaîne de caractères pour indiquer quel formulaire ouvrir
 openFormType(formType: string) {
  this.openForm.emit(formType);
}


}
