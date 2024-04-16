import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ExamComponent } from './exam/exam.component';

export const routes: Routes = [
    // {
    //     path: '',
    //     redirectTo: '/auth',
    //     title: 'Root Page'
    // },
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
    },
    {
        path: 'exam',
        component: ExamComponent,
        title: 'Exam Page'
    }
];


// export const routes: Routes = [];
