import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { LandingComponent } from './pages/landing/landing.component';
import { HireAdvisorComponent } from './pages/hire-advisor/hire-advisor.component';
import { ArticleHireComponent } from './pages/article-hire/article-hire.component';
import { ArticleSellComponent } from './pages/article-sell/article-sell.component';
import { ArticleSellSecondComponent } from './pages/article-sell-second/article-sell-second.component';
import { ArticleBrokerComponent } from './pages/article-broker/article-broker.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: LandingComponent},
  {path: 'sign-up', component: SignUpComponent},
  {
    path: 'hire-advisor',
    component: HireAdvisorComponent
  },
  {
    path: 'article-hire',
    component: ArticleHireComponent
  },
  {
    path: 'article-sell',
    component: ArticleSellComponent
  },
  {
    path: 'article-sell-second',
    component: ArticleSellSecondComponent
  },
  {
    path: 'article-broker',
    component: ArticleBrokerComponent
  }
  // { path: '**', component: LandingComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
