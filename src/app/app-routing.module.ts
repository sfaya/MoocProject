import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategorieDetailsComponent } from './categorie-details/categorie-details.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { CategorieupdateComponent } from './categorieupdate/categorieupdate.component';
import { FormationComponent } from './formation/formation.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { OverviewComponent } from './overview/overview.component';
import { UpdateFormationComponent } from './update-formation/update-formation.component';

const routes: Routes = [
  { path: '', redirectTo: 'categories', pathMatch: 'full' },
  { path: 'categories', component: CategoriesListComponent },
  {
    path: 'categorie/:id',
    component: CategorieDetailsComponent,
    children: [
      {
        path: 'update',
        component: CategorieupdateComponent,
      },
      { path: 'overview', component: OverviewComponent },
    ],
  },
  { path: 'formations', component: FormationComponent },
  { path: 'updateFormation', component: UpdateFormationComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
