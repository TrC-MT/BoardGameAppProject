import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [],
  imports: [ // Bring these in from an outside source.
    CommonModule,
    MatToolbarModule,
  ],
  exports: [ // Let other parts of the app use theses.
    MatToolbarModule
  ]
})
export class MaterialModule { }
