/**
 * Created by ghj on 16-10-6.
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroesComponent} from './heroes.component';
import {HeroService} from './hero.service';

import {routing} from './app.routing';
import {DashboardComponent} from "./dashboard.component";

//Import for loading & configuring the in-memory web api
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';

@NgModule({
    imports : [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
    ],
    declarations:[
        AppComponent,
        HeroDetailComponent,
        HeroesComponent,
        DashboardComponent
    ],
    providers:[HeroService],
    bootstrap:[AppComponent]
})

export class AppModule{}
