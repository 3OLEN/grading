import { NgForOf, NgIf } from '@angular/common'
import { Component, Input } from '@angular/core'
import { MatMiniFabButton } from '@angular/material/button'
import { MatCard, MatCardContent, MatCardHeader } from '@angular/material/card'
import { MatChip } from '@angular/material/chips'
import { MatIcon } from '@angular/material/icon'
import { MatTooltip } from '@angular/material/tooltip'
import { type ModuleCard } from '../../models/module-card'
import { ModuleAssessmentsComponent } from './module-assessments/module-assessments.component'
import { ModuleSessionComponent } from './module-session/module-session.component'

@Component({
    imports: [
        MatCard,
        MatCardHeader,
        MatCardContent,
        NgIf,
        NgForOf,
        ModuleSessionComponent,
        ModuleAssessmentsComponent,
        MatIcon,
        MatMiniFabButton,
        MatChip,
        MatTooltip,
    ],
    selector: 'app-personal-modules-list-card',
    standalone: true,
    styleUrl: './module-card.component.scss',
    templateUrl: './module-card.component.html',
})
export class ModuleCardComponent {
    @Input({ required: true })
    public module!: ModuleCard
}
