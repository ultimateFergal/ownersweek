import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { LandingComponent } from './pages/landing/landing.component';
import { AccessBarComponent } from './components/access-bar/access-bar.component';
import { HireAdvisorComponent } from './pages/hire-advisor/hire-advisor.component';
import { QuestionComponent } from './components/question/question.component';
import { ArticleHireComponent } from './pages/article-hire/article-hire.component';
import { SolutionsComponent } from './components/solutions/solutions.component';
import { HttpClientModule } from '@angular/common/http';


/* Firebase */
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';

// Auth service
import { AuthenticationService } from './shared/authentication.service';

import { AngularFireAuth } from '@angular/fire/auth';
import { ArticleSellComponent } from './pages/article-sell/article-sell.component';
import { ArticleSellSecondComponent } from './pages/article-sell-second/article-sell-second.component';
import { ArticleBrokerComponent } from './pages/article-broker/article-broker.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    SignUpComponent,
    LandingComponent,
    AccessBarComponent,
    HireAdvisorComponent,
    QuestionComponent,
    ArticleHireComponent,
    SolutionsComponent,
    ArticleSellComponent,
    ArticleSellSecondComponent,
    ArticleBrokerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    HttpClientModule
  ],
  providers: [AngularFirestore, AngularFireAuth, AuthenticationService, AngularFirestoreModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
