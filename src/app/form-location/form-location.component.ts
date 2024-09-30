import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { location } from '../models/location.model';
import { LocationService } from '../services/location.service';

@Component({
  selector: 'app-form-location',
  templateUrl: './form-location.component.html',
  styleUrls: ['./form-location.component.scss']
})
export class FormLocationComponent implements OnInit {

  locationForm!: FormGroup;
  localPreviews$!: Observable<location>;

  constructor(private formBuilder: FormBuilder,
              private locationService: LocationService ) { }

  ngOnInit(): void {

    this.locationForm = this.formBuilder.group({
      namelieu: [null, Validators.required],
      descriptionlieu: [ null, Validators.required],
      type: ['public', Validators.required],
      etat: ['public', Validators.required]
    },{
      updateOn: 'blur'
    });
    this.localPreviews$ = this.locationForm.valueChanges.pipe(
      map(localValue => ({
        ...localValue,

      }))
    )
  }
  onSubmit(): void {
    if (this.locationForm.valid) {
      this.locationService.addLocation(this.locationForm.value);
      this.locationForm.reset();
      
    }
  }

}
