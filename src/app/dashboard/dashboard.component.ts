import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
// import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes = HEROES;
  
  constructor(private router: Router,private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
  public edit(id: number) {
    this.router.navigate(["/hero", id]);
  }

  public goHeroesPage(){
    this.router.navigate(["/dashboard/heroes"]);
  }
}