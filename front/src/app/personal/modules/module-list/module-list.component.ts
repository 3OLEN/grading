import { NgForOf } from '@angular/common'
import { Component } from '@angular/core'
import { MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle } from '@angular/material/expansion'
import { MatIcon } from '@angular/material/icon'
import { PageHeadingComponent } from '../../../shared/templates/main/page-heading/page-heading.component'
import { type ModuleCard } from '../models/module-card'
import { ModuleCardComponent } from './module-card/module-card.component'

@Component({
    imports: [
        PageHeadingComponent,
        MatExpansionPanelTitle,
        MatExpansionPanel,
        MatIcon,
        MatExpansionPanelHeader,
        NgForOf,
        ModuleCardComponent,
    ],
    selector: 'app-personal-modules-list',
    standalone: true,
    styleUrl: './module-list.component.scss',
    templateUrl: './module-list.component.html',
})
export class ModuleListComponent {
    /* eslint-disable canonical/sort-keys --- Same sort as type */
    public modules: ModuleCard[] = [
        {
            id: 0,
            name: 'Architecture application web, Git, qualité application',
            promotion: '3OLEN',
            assessments: [],
            sessions: [],
        },
        {
            id: 0,
            name: 'Projet 31',
            promotion: '3OLEN',
            assessments: [],
            sessions: [],
            nextSession: {
                label: 'Vendredi 9 février',
                type: 'course',
                date: new Date(2024, 1, 9),
            },
        },
        {
            id: 0,
            name: 'Projet 32',
            promotion: '3OLEN',
            assessments: [],
            sessions: [],
            nextSession: null,
        },
        {
            id: 0,
            name: 'Framework Symfony',
            promotion: '3OLEN',
            assessments: [],
            sessions: [],
            nextSession: null,
        },
    ]
    /* eslint-enable canonical/sort-keys */

    public ngForModuleTrackBy(index: number, module: ModuleCard): number {
        return module.id
    }
}
