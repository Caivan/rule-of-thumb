import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PastTrialsComponent } from './past-trials/past-trials.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PublicFigureComponent } from './public-figure/public-figure.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderTrialBoxComponent } from './header-trial-box/header-trial-box.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    PastTrialsComponent,
    HowItWorksComponent,
    LoginComponent,
    SignUpComponent,
    PublicFigureComponent,
    PageNotFoundComponent,
    HeaderTrialBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
