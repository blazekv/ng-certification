import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkingButtonComponent } from './components/working-button/working-button.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [CommonModule, MatButtonModule],
  declarations: [WorkingButtonComponent],
  exports: [WorkingButtonComponent],
})
export class ButtonUiModule {}
