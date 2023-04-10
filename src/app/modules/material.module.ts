import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon'


@NgModule({
  declarations: [],
  imports: [ // Bring these in from an outside source.
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule
  ],
  exports: [ // Let other parts of the app use theses.
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule
  ]
})
export class MaterialModule { }
