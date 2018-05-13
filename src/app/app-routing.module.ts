import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { BottomSheetComponent } from './components/bottom-sheet/bottom-sheet.component';

const routes: Routes = [
  { path: 'button-example', component: ButtonComponent },
  { path: 'card-example', component: CardComponent },
  { path: 'bottom-sheet-example', component: BottomSheetComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
