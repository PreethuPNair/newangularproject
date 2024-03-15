// app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StudentTableComponent } from './student-table/student-table.component';
import { FilterPipe } from './pipes/filter.pipe'; // Import the FilterPipe here

@NgModule({
  declarations: [
    AppComponent,
    StudentTableComponent, // Add StudentTableComponent here
    FilterPipe // Declare the FilterPipe here
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
