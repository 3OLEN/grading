import { type Routes } from '@angular/router'
import { HomeComponent } from './home/home.component'

export const routes: Routes = [
    {
        component: HomeComponent,
        path: '',
        title: 'Accueil',
    },
]
