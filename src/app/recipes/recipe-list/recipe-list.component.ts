import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({

    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css'],
    
})

export class RecipeListComponent implements OnInit{

    recipes: Recipe[] = [
        new Recipe('First test recipe','This is just a test','https://cookitonce.com/wp-content/uploads/2021/01/Yakitori-Recipe.jpg'),
        new Recipe('First test recipe','This is just a test','https://cookitonce.com/wp-content/uploads/2021/01/Yakitori-Recipe.jpg')
    ];

    constructor(){}

    ngOnInit(): void {
        
    }

}