import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Categorie } from '../categorie';
import { CrudCategoryService } from '../Services/crud-category.service';

@Component({
  selector: 'app-categorie-details',
  templateUrl: './categorie-details.component.html',
  styleUrls: ['./categorie-details.component.css'],
})
export class CategorieDetailsComponent implements OnInit {
  categoryId: any;
  categorie: Categorie = { id: 0, name: 'test' };
  constructor(
    private activRoute: ActivatedRoute,
    private categorieService: CrudCategoryService,
    private route: Router
  ) {}

  ngOnInit(): void {
    //this.categoryId = this.activRoute.snapshot.paramMap.get('id');
    //
    this.activRoute.paramMap.subscribe((param: ParamMap) => {
      this.categoryId = param.get('id');
    });
    this.getCategorie(this.categoryId);
  }

  getCategorie(id: any) {
    this.categorieService.getCategory(id).subscribe((data) => {
      this.categorie = data;
    });
  }

  goToPrevious() {
    this.categoryId = parseInt(this.categoryId) - 1;
    this.route.navigate(['categorie', this.categoryId]);
    this.getCategorie(this.categoryId);
  }

  goToNext() {
    this.categoryId = parseInt(this.categoryId) + 1;
    this.route.navigate(['categorie', this.categoryId]);
    this.getCategorie(this.categoryId);
  }

  goBack() {
    this.route.navigate([
      'categories',
      { x: this.categoryId, y: this.categorie.name },
    ]);
  }
}
