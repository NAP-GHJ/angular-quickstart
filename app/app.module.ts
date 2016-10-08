/**
 * Created by ghj on 16-10-6.
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponment} from "./app.component";

@NgModule({
    imports : [
        BrowserModule,
        FormsModule
    ],
    declarations:[AppComponment],
    bootstrap:[AppComponment]
})

export class AppModule{}
