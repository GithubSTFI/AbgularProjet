import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category.model';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  
  category!: Category[];

  constructor( private CategorySevrvice: CategoryService) { }

  ngOnInit(): void {
    this.category= this.CategorySevrvice.getcategories();
  }

}
