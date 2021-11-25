import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import {AnimationService, AnimatorModule} from 'css-animator';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    NgbDropdownModule,
    AnimatorModule,
    ToastrModule.forRoot(),

  ],
  declarations: [CardComponent],
  exports: [CardComponent],
  providers: [AnimationService]
})
export class CardModule { }
