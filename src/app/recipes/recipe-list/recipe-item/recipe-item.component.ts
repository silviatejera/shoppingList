
import {Component} from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
    selector: 'app-recipe-item',
    templateUrl: './recipe-item.component.html',
    styleUrls: ['./recipe-item.component.css']
})

export class RecipeItemComponent {

    recipe: Recipe = new Recipe('First test recipe','This is just a test','https://cookitonce.com/wp-content/uploads/2021/01/Yakitori-Recipe.jpg');

    constructor(){

    }

    ngOnInit(): void{

    }
}
