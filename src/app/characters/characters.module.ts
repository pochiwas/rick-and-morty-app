import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardComponent } from './components/card/card.component';
import { ImageCardComponent } from './components/image-card/image-card.component';

@NgModule({
    imports: [CommonModule],
    exports: [],
    declarations: [
    CardComponent,
    ImageCardComponent
  ],
    providers: [],
})
export class CharactersModule { }
