import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkingButtonComponent } from './components/working-button/working-button.component';
import { MatButtonModule } from '@angular/material/button';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatInputModule, ReactiveFormsModule],
  declarations: [WorkingButtonComponent, AutocompleteComponent],
  exports: [WorkingButtonComponent, AutocompleteComponent],
})
export class BasicUiModule {}
