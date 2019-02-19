import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';

import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatSelectModule,
  MatTabsModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatChipsModule,
  MatCardModule,
  MatCheckboxModule,
  MatMenuModule,
  MatTooltipModule,
  MatProgressBarModule,
  MatSnackBarModule,
  MatGridListModule,
  MatExpansionModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatDialogModule,
  MatTreeModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatPaginatorIntl,
  MatAutocompleteModule,
  MatStepperModule,
  MatRippleModule,

} from '@angular/material';

import { CustomMatPaginatorIntl } from '@app/shared/class/mat-paginator-intl';

import { FlexLayoutModule } from '@angular/flex-layout';

import { CdkTableModule } from '@angular/cdk/table';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from '@app/shared/components/layout/layout.component';
import { NavMenuComponent } from '@app/shared/components/nav-menu/nav-menu.component';


@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    MatRippleModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatAutocompleteModule,
    MatIconModule,
    MatStepperModule,
    MatListModule,
    MatButtonModule,
    MatToolbarModule,
    MatSelectModule,
    MatTabsModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatCardModule,
    MatCheckboxModule,
    MatMenuModule,
    MatTooltipModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatGridListModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    CdkTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatTreeModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatTreeModule,
    FlexLayoutModule,

    RouterModule
  ],
  exports: [
    LayoutModule,
    MatToolbarModule,
    MatRippleModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatStepperModule,
    MatListModule,
    MatButtonModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatTabsModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatCardModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    MatTooltipModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatGridListModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    CdkTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatTreeModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatTreeModule,
    FlexLayoutModule,

    LayoutComponent,
    NavMenuComponent
  ],
  declarations: [LayoutComponent, NavMenuComponent],
  providers: [
    {provide: MatPaginatorIntl, useClass: CustomMatPaginatorIntl}
  ],
  entryComponents: [],
})
export class SharedModule {
  static forRoot() {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }
}

