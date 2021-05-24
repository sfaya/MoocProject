import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  ActivationEnd,
  ParamMap,
  Router,
} from '@angular/router';
import { Categorie } from '../categorie';
import { CrudCategoryService } from '../Services/crud-category.service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css'],
})
export class CategoriesListComponent implements OnInit {
  categoriesTab: any = [];
  newCategory = '';
  selectedId: any;
  constructor(
    private categoryService: CrudCategoryService,
    private route: Router,
    private activRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.fetchCategories();
    this.activRoute.paramMap.subscribe((param: ParamMap) => {
      this.selectedId = param.get('x');
    });
  }

  fetchCategories() {
    this.categoryService.getCategories().subscribe((data: {}) => {
      this.categoriesTab = data;
    });
  }

  remove(data: any) {
    this.categoryService.delete(data).subscribe((res) => {
      this.fetchCategories();
    });
  }

  addCategory() {
    console.log(this.newCategory);
    this.categoryService
      .create({ id: 3, name: this.newCategory })
      .subscribe((res) => {
        this.fetchCategories();
      });
  }

  goToFormations() {
    this.route.navigate(['updateFormation']);
  }

  goToDetails(x: any) {
    this.route.navigate(['categorie', x]);
  }
}
