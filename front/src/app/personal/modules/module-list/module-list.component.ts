import { NgForOf } from '@angular/common'
import { Component, type OnInit } from '@angular/core'
import { MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle } from '@angular/material/expansion'
import { MatIcon } from '@angular/material/icon'
import { NgxMasonryModule, type NgxMasonryOptions } from 'ngx-masonry'
import { PageHeadingComponent } from '../../../shared/templates/main/page-heading/page-heading.component'
// eslint-disable-next-line @typescript-eslint/consistent-type-imports --- Required for DI
import { ModulesDataProvider } from '../../services/data-providers/modules.data-provider'
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
        NgxMasonryModule,
    ],
    selector: 'app-personal-modules-list',
    standalone: true,
    styleUrl: './module-list.component.scss',
    templateUrl: './module-list.component.html',
})
export class ModuleListComponent implements OnInit {
    public modules!: ModuleCard[]

    public readonly masonryOptions: NgxMasonryOptions = {
        fitWidth: true,
        gutter: 15,
    }

    public constructor(
        private personalModulesDataProvider: ModulesDataProvider,
    ) {
    }

    public ngOnInit() {
        this.provideModules()
    }

    public ngForModuleTrackBy(index: number, module: ModuleCard): number {
        return module.id
    }

    private provideModules(): this {
        this.personalModulesDataProvider
            .getCurrentModules()
            .subscribe(currentModuleList => {
                this.modules = currentModuleList
            })

        return this
    }
}
