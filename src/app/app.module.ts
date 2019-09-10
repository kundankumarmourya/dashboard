import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// Angular Components start
import {
  MatAutocompleteModule, MatBadgeModule,  MatBottomSheetModule,  MatButtonModule,  MatButtonToggleModule,  MatCardModule,  MatCheckboxModule, MatChipsModule,  MatDatepickerModule, MatDialogModule,  MatDividerModule,  MatExpansionModule,
  MatGridListModule,  MatIconModule,  MatInputModule,  MatListModule,  MatMenuModule,  MatNativeDateModule, MatPaginatorModule,  MatProgressBarModule,  MatProgressSpinnerModule,  MatRadioModule,  MatRippleModule, MatSelectModule,  MatSidenavModule,  MatSliderModule,  MatSlideToggleModule,  MatSnackBarModule,  MatSortModule,
  MatStepperModule,  MatTableModule,  MatTabsModule,  MatToolbarModule,  MatTooltipModule,  MatTreeModule,
} from '@angular/material';
// Angular Components end
// core file inport up


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainPageComponent } from './main-page/main-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // Angular Components start
    MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule, MatButtonModule, MatButtonToggleModule,
    MatCardModule, MatCheckboxModule,    MatChipsModule, MatStepperModule, MatDatepickerModule, MatDialogModule,    MatDividerModule, MatExpansionModule, MatGridListModule, MatIconModule,MatInputModule, MatListModule, MatMenuModule,
    MatNativeDateModule, MatPaginatorModule, MatProgressBarModule,MatProgressSpinnerModule, MatRadioModule,  MatRippleModule,  MatSelectModule,  MatSidenavModule, MatSliderModule,  MatSlideToggleModule,  MatSnackBarModule,
    MatSortModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule,MatTreeModule,
    // Angular Components end
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
