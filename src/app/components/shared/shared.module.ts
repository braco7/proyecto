import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatInputModule,
    MatSliderModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    MatTableModule
  ]
})
export class SharedModule { }
