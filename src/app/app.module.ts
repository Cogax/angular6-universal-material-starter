import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatIconModule, MatButtonModule, MatToolbarModule, MatDividerModule, MatBottomSheetModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { BottomSheetComponent } from './components/bottom-sheet/bottom-sheet.component';
import { SheetComponent } from './components/sheet/sheet.component';


@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'angular6-universal-material' }),
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatDividerModule,
    MatBottomSheetModule
  ],
  declarations: [
    AppComponent,
    ButtonComponent,
    CardComponent,
    BottomSheetComponent,
    SheetComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    SheetComponent
  ]
})
export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string) {
    const platform = isPlatformBrowser(platformId) ?
      'in the browser' : 'on the server';
    console.log(`Running ${platform} with appId=${appId}`);
  }
}
