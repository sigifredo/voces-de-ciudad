import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ChaptersComponent } from './components/chapters/chapters.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavbarComponent,
        ChaptersComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        NgbModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
