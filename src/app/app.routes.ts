import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { FeaturesComponent } from './components/features/features.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      { path: '', redirectTo: '/', pathMatch: 'full' }
    ]
  },
  
  { path: '**', redirectTo: '' } 
];