import { Injectable } from "@angular/core";
import { Category } from "../models/category.model";

@Injectable({
    providedIn:'root'
})
export class CategoryService {
    private categories: Category [] = [
        new Category(
            'First Category',
            'Best group Ajouter plus de description enore et encore sans vous en lasser'
        ),
        new Category(
            'Second Category',
            'Last group Ajouter plus de description enore et encore sans vous en lasser'
        ),
        new Category(
            'Third Category',
            'master class Ajouter plus de description enore et encore sans vous en lasser'
        ),
        new Category(
            'Senior category',
            'Better group Ajouter plus de description enore et encore sans vous en lasser'
        ),
        new Category(
            'First Category',
            'Best group Ajouter plus de description enore et encore sans vous en lasser'
        ),
        new Category(
            'Second Category',
            'Last group Ajouter plus de description enore et encore sans vous en lasser'
        ),
        new Category(
            'Third Category',
            'master classAjouter plus de description enore et encore sans vous en lasser'
        ),
        new Category(
            'Senior category ',
            'Better group Ajouter plus de description enore et encore sans vous en lasser'
        ),
        new Category(
            'First Category',
            'Best group Ajouter plus de description enore et encore sans vous en lasser'
        ),
        new Category(
            'Second Category',
            'Last group Ajouter plus de description enore et encore sans vous en lasser'
        ),
        new Category(
            'Third Category',
            'master class Ajouter plus de description enore et encore sans vous en lasser'
        ),
        new Category(
            'Senior category',
            'Better group Ajouter plus de description enore et encore sans vous en lasser'
        ),
        new Category(
            'First Category',
            'Best group Ajouter plus de description enore et encore sans vous en lasser'
        ),
        new Category(
            'Second Category',
            'Last group Ajouter plus de description enore et encore sans vous en lasser'
        ),
        new Category(
            'Third Category',
            'master class Ajouter plus de description enore et encore sans vous en lasser'
        ),
        new Category(
            'Senior category',
            'Better group Ajouter plus de description enore et encore sans vous en lasser'
        )
    ];

    getcategories(): Category[] {
        return this.categories;
    }

    // Ajouter une nouvelle catégorie
  addCategory(newCategory: Category): void {
    this.categories.push(newCategory);
  }
}