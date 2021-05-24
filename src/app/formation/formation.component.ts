import { Component, OnInit } from '@angular/core';
import { CrudCategoryService } from '../Services/crud-category.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css'],
})
export class FormationComponent implements OnInit {
  constructor(private categservice: CrudCategoryService) {}

  formations = [
    { id: 1, name: 'Angular' },
    { id: 2, name: 'Node' },
  ];
  ngOnInit(): void {}
  showdata() {
    //this.categservice.logger({ id: 1, name: 'formation Component' });
  }
}
