import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { GoalComponent } from './goal/goal.component';
import { QuoteComponent } from './quote/quote.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GoalDetailComponent } from './goal-detail/goal-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'list', component: ListComponent },
  { path: 'goals', component: GoalComponent },
  { path: 'goals/:id', component: GoalDetailComponent },
  { path: 'quote', component: QuoteComponent },
  { path: '**', component: NotFoundComponent },

  // Empty paths
  { path: '', redirectTo:"/goals", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
