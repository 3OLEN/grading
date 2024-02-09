import { DatePipe, NgForOf, TitleCasePipe } from '@angular/common'
import { Component, Input } from '@angular/core'
import { MatIconButton } from '@angular/material/button'
import { MatChip } from '@angular/material/chips'
import { MatIcon } from '@angular/material/icon'
import {
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderCellDef,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    MatTable,
} from '@angular/material/table'
import { MatTooltip } from '@angular/material/tooltip'
import { type ModuleAssessment } from '../../../models/module-assessment'

@Component({
    imports: [
        MatTable,
        NgForOf,
        DatePipe,
        TitleCasePipe,
        MatColumnDef,
        MatHeaderCell,
        MatCell,
        MatCellDef,
        MatHeaderCellDef,
        MatRow,
        MatRowDef,
        MatHeaderRow,
        MatHeaderRowDef,
        MatIcon,
        MatIconButton,
        MatChip,
        MatTooltip,
    ],
    selector: 'app-personal-modules-list-card-assessments',
    standalone: true,
    styleUrl: './module-assessments.component.scss',
    templateUrl: './module-assessments.component.html',
})
export class ModuleAssessmentsComponent {
    @Input({ required: true })
    public assessments!: ModuleAssessment[]

    public readonly displayedColumns: string[] = ['assessment-date', 'assessment-label', 'actions']
}
