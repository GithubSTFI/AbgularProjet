import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule} from '@angular/material/divider'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormEventComponent } from './form-event/form-event.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CreateCardComponent } from './create-card/create-card.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventService } from './services/event.service';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryService } from './services/category.service';
import { LocationListComponent } from './location-list/location-list.component';
import { LocationService } from './services/location.service';
import { FormCategoryComponent } from './form-category/form-category.component';
import { FormLocationComponent } from './form-location/form-location.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormEventComponent,
    CreateCardComponent,
    EventListComponent,
    CategoryListComponent,
    LocationListComponent,
    FormCategoryComponent,
    FormLocationComponent,
    
    
    
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatTabsModule,
    MatDividerModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatSelectModule,
    MatNativeDateModule,
    MatDatepickerModule,
    
    
  


  ],
  providers: [EventService, CategoryService, LocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
