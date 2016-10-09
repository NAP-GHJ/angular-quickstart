/**
 * Created by ghj on 16-10-9.
 */

import {Component} from '@angular/core';
import {OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
    moduleId:module.id,
    selector:'my-heroes',
    templateUrl:'heroes.component.html',
    styleUrls: ['heroes.component.css']

})


export class HeroesComponent implements OnInit{

    title = 'Tour of Heroes';
    heroes :Hero[];
    selectedHero:Hero;

    constructor(
        private heroService:HeroService,
        private router:Router
    ){}

    //OnInit
    ngOnInit():void{
        this.getHeroes();
    }

    onSelect(hero:Hero):void{
        this.selectedHero = hero;
    }

    getHeroes():void{
        this.heroService.getHeroes().then(heroes=> this.heroes = heroes);
    }

    gotoDetail():void{
        this.router.navigate(['/detail',this.selectedHero.id]);
    }
}

