import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { HomepageComponent } from './homepage/homepage.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/auth',
        title: 'Root Page'
    },
    {
        path: 'auth',
        component: AuthComponent,
        title: 'Auth'
    },
    {
        path: 'signup',
        component: SignupComponent,
        title: 'Signup'
    },
    {
        path: 'home',
        component: HomepageComponent,
        title: 'Home Page'
    }
];


// export const routes: Routes = [];
