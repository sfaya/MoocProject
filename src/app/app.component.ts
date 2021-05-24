import { Component } from '@angular/core';
import { CrudCategoryService } from './Services/crud-category.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'GLSIB';
  var1 = 'test';

  f1() {
    alert('Salut');
  }
}
