import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CrudCategoryService } from '../Services/crud-category.service';

@Component({
  selector: 'app-categorie-item',
  templateUrl: './categorie-item.component.html',
  styleUrls: ['./categorie-item.component.css'],
})
export class CategorieItemComponent implements OnInit {
  @Input() value: any;

  constructor() {}

  ngOnInit(): void {
    //this.categService.logger({ id: this.id, name: this.name });
  }

  send() {
    //  this.SendingVar.emit({ value: this.childVar });
  }
}
