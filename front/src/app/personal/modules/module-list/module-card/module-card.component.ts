import { NgForOf, NgIf } from '@angular/common'
import { Component, Input } from '@angular/core'
import { MatCard, MatCardContent, MatCardHeader } from '@angular/material/card'
import { type ModuleCard } from '../../models/module-card'

@Component({
    imports: [
        MatCard,
        MatCardHeader,
        MatCardContent,
        NgIf,
        NgForOf,
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
