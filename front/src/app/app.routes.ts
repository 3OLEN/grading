import { type Routes } from '@angular/router'
import { PageNotFoundComponent } from './common/errors/page-not-found/page-not-found.component'
import { HomeComponent } from './home/home.component'
import {
    ModuleListComponent as PersonalModuleListComponent,
} from './personal/modules/module-list/module-list.component'
import { PersonalRouteEnum } from './shared/enum/router/PersonalRouteEnum'

export const routes: Routes = [
    {
        component: HomeComponent,
        path: '',
        title: 'Accueil',
    },
    {
        component: PersonalModuleListComponent,
        path: PersonalRouteEnum.ModuleList,
        title: 'Mes modules',
    },
    {
        component: PageNotFoundComponent,
        path: '**',
    },
]
