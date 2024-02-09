import { DatePipe, TitleCasePipe } from '@angular/common'
import { Component, Input } from '@angular/core'
import { MatChip } from '@angular/material/chips'
import { MatTooltip } from '@angular/material/tooltip'
import { type ModuleSession } from '../../../models/module-session'

@Component({
    imports: [
        MatChip,
        DatePipe,
        TitleCasePipe,
        MatTooltip,
    ],
    selector: 'app-personal-modules-list-card-session',
    standalone: true,
    styleUrl: './module-session.component.scss',
    templateUrl: './module-session.component.html',
})
export class ModuleSessionComponent {
    @Input({ required: true })
    public session!: ModuleSession
}
