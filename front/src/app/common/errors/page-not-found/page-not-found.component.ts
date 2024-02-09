import { Component } from '@angular/core'
import { MatAnchor } from '@angular/material/button'
import { MatCard, MatCardActions, MatCardContent, MatCardHeader } from '@angular/material/card'
import { MatTooltip } from '@angular/material/tooltip'
import { RouterLink } from '@angular/router'
import { GlobalRouteEnum } from '../../../shared/enum/router/GlobalRouteEnum'

@Component({
    imports: [
        MatCard,
        MatCardHeader,
        MatCardContent,
        RouterLink,
        MatAnchor,
        MatCardActions,
        MatTooltip,
    ],
    selector: 'app-errors-page-not-found',
    standalone: true,
    styleUrl: './page-not-found.component.scss',
    templateUrl: './page-not-found.component.html',
})
export class PageNotFoundComponent {
    protected readonly GlobalRouteEnum = GlobalRouteEnum
}
