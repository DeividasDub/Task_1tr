import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { YouTubePlayerModule } from "@angular/youtube-player";
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { PradziaComponent } from './pradzia/pradzia.component';
import { FormaComponent } from './forma/forma.component';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { PabaigaComponent } from './pabaiga/pabaiga.component';



const routes: Routes = [
  { path: '', component: PradziaComponent, pathMatch: 'full' },
  { path: 'forma', component: FormaComponent },
  { path: 'pabaiga', component: PabaigaComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    YouTubePlayerModule,
    MatButtonModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatInputModule,
    MatListModule,
  ],

  declarations: [
    AppComponent,
    PradziaComponent,
    FormaComponent,
    PabaigaComponent
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent],
})
export class AppModule { }
