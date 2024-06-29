import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavigationBarModule } from './top-navigation-bar/top-navigation-bar.module';
import { InfoCardComponent } from './info-card/info-card.component';
import { CardContainerComponent } from './card-container/card-container.component';
import { AboutCardComponent } from './about-card/about-card.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { AboutEduComponent } from './about-card/about-edu/about-edu.component';
import { RouterModule } from '@angular/router';

// Import Angular Material modules
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AboutSkiComponent } from './about-card/about-ski/about-ski.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTreeModule} from '@angular/material/tree';
import { ProjectsCardComponent } from './projects-card/projects-card.component';
import {MatTableModule} from '@angular/material/table';
import { ProjectDetailComponent } from './projects-card/project-detail/project-detail.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CvComponentComponent } from './cv-component/cv-component.component';
import { ContactComponent } from './contact/contact.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    InfoCardComponent,
    CardContainerComponent,
    AboutCardComponent,
    NotfoundComponent,
    HomeComponent,
    AboutEduComponent,
    AboutSkiComponent,
    ProjectsCardComponent,
    ProjectDetailComponent,
    CvComponentComponent,
    ContactComponent,
    BottomBarComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TopNavigationBarModule, 
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule, 
    MatToolbarModule,
    MatSidenavModule,
    MatChipsModule,
    MatSlideToggleModule,
    MatTreeModule,
    MatTableModule,
    MatPaginatorModule,
    MatSelectModule,
    FormsModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
