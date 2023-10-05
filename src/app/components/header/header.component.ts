import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DishType } from 'src/app/model/recipe';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSelectModule,
    MatFormFieldModule
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  selectedCategory: string = '-1';

  categories = Object.entries(DishType).slice(Object.entries(DishType).length/2);

  toggleTheme(){
    document.body.classList.toggle('pippo-dark')
  }

  categoryChanged(){
    // if(this.selectedCategory === '-1'){
    //   this.recipes = this.allRecipes;
    // } else {
    //   const categoryNumber = parseInt(this.selectedCategory);
    //   this.recipes = this.allRecipes.filter(recipe => recipe.category === categoryNumber)
    // }
  }

}
