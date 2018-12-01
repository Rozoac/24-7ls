import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';


const APP_ROUTES: Routes = [
    
  
            { path: '', component: LandingComponent }
           
    ]
  
  
  export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);