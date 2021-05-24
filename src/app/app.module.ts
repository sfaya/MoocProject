import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategorieItemComponent } from './categorie-item/categorie-item.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { ThemeComponent } from './theme/theme.component';
import { MydirDirective } from './mydir.directive';
import { FormationComponent } from './formation/formation.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { UpdateFormationComponent } from './update-formation/update-formation.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CategorieDetailsComponent } from './categorie-details/categorie-details.component';
import { CategorieupdateComponent } from './categorieupdate/categorieupdate.component';
import { OverviewComponent } from './overview/overview.component';

@NgModule({
  declarations: [
    AppComponent,
    CategorieItemComponent,
    CategoriesListComponent,
    ThemeComponent,
    MydirDirective,
    FormationComponent,
    HeaderComponent,
    UpdateFormationComponent,
    NotfoundComponent,
    CategorieDetailsComponent,
    CategorieupdateComponent,
    OverviewComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
