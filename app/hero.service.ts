/**
 * Created by ghj on 16-10-8.
 */
import {Injectable} from '@angular/core'

import {Hero} from './hero'
import {HEROES} from './mock-heroes'

@Injectable()
export class HeroService{
    getHero():Promise<Hero[]>{
        return Promise.resolve(HEROES);
    }
}