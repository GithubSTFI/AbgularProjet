import { Component, OnInit } from '@angular/core';
import { LocationService } from '../services/location.service';
import { location } from '../models/location.model';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss']
})
export class LocationListComponent implements OnInit {

  localisation!: location[];

  constructor(private locationService: LocationService) { }

  ngOnInit(): void {

    this.localisation= this.locationService.getLocation();
  }

}
