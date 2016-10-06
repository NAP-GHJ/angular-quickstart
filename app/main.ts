/**
 * Created by ghj on 16-10-6.
 */

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule}from './app.module';

const platform = platformBrowserDynamic();

platform.bootstrapModule(AppModule);