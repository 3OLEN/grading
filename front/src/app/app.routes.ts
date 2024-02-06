import { type Routes } from '@angular/router'
import { PageNotFoundComponent } from './common/errors/page-not-found/page-not-found.component'
import { HomeComponent } from './home/home.component'

export const routes: Routes = [
    {
        component: HomeComponent,
        path: '',
        title: 'Accueil',
    },
    {
        component: PageNotFoundComponent,
        path: '**',
    },
]
