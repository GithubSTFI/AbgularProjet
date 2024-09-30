import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';
import { CategoryService } from '../services/category.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-form-category',
  templateUrl: './form-category.component.html',
  styleUrls: ['./form-category.component.scss']
})
export class FormCategoryComponent implements OnInit {

  categoryForm!: FormGroup;
  categoryPreviews$!: Observable<Category>

  constructor( private CategoryService: CategoryService,
              private formbuilder: FormBuilder) {}

  ngOnInit(): void {

    this.categoryForm = this.formbuilder.group({
      namecategory: [null, Validators.required],
      descriptioncategory: [null, Validators.required]
    }, {
      updateOn: 'blur'
    });

    this.categoryPreviews$ = this.categoryForm.valueChanges.pipe(
      map(categoryValue =>({
        ...categoryValue,
      }))
    )
  }

  onSubmitCategory(): void {
    console.log('Form Valid:', this.categoryForm.valid);
    console.log('Form Values:', this.categoryForm.value);

    if (this.categoryForm.valid) {
      this.CategoryService.addCategory(this.categoryForm.value);
      this.categoryForm.reset();
      
    }
  }


}
