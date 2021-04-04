import { Routes } from '@angular/router';
import { DashboardComponent } from '@src/app/dashboard/dashboard.component';
import { HeroDetailComponent  } from '@src/app/hero-detail/hero-detail.component';
import { HeroesComponent } from '@src/app/heroes/heroes.component';
import { TestMockComponent} from '@src/app/test-mock/test-mock.component';
export const routes: Routes = [
  { path: "", redirectTo: "/test", pathMatch: "full" },
  { path: "test", component: TestMockComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "dashboard/heroes", component: HeroesComponent },
  {path: "hero/:id", component: HeroDetailComponent } 
];
