/**
 * Created by ghj on 16-10-9.
 */
import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {OnInit} from '@angular/core';

import {Hero} from './hero';
import {HeroService} from './hero.service';



@Component({
    moduleId:module.id,
    selector:'my-dashboard',
    templateUrl:'dashboard.component.html',
    styleUrls:['dashboard.component.css']
})

export class DashboardComponent implements OnInit{
    heroes:Hero [] =[];

    constructor(
        private heroService:HeroService,
        private router:Router
    ){}

    ngOnInit():void{
        this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1,5));
    }

    gotoDetail(hero:Hero):void{
        let link=['/detail',hero.id];
        this.router.navigate(link);
    }
}