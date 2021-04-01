import { Routes } from '@angular/router';
import { DashboardComponent } from '@src/app/dashboard/dashboard.component';
import { HeroDetailComponent  } from '@src/app/hero-detail/hero-detail.component';
import { HeroesComponent } from '@src/app/heroes/heroes.component';
export const routes: Routes = [
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "dashboard", component: DashboardComponent },
  { path: "dashboard/heroes", component: HeroesComponent },
  {path: "hero/:id", component: HeroDetailComponent } 
];
