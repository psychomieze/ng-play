import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MdButtonModule, MdDatepickerModule, MdInputModule, MdNativeDateModule, MdSelectModule} from "@angular/material";

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        BrowserAnimationsModule,
        MdButtonModule,
        MdDatepickerModule,
        MdNativeDateModule,
        MdSelectModule,
        MdInputModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
