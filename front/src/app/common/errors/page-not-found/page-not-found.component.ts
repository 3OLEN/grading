import { Component } from '@angular/core'
import { MatAnchor } from '@angular/material/button'
import { MatCard, MatCardActions, MatCardContent, MatCardHeader } from '@angular/material/card'
import { RouterLink } from '@angular/router'

@Component({
    imports: [
        MatCard,
        MatCardHeader,
        MatCardContent,
        RouterLink,
        MatAnchor,
        MatCardActions,
    ],
    selector: 'app-errors-page-not-found',
    standalone: true,
    styleUrl: './page-not-found.component.scss',
    templateUrl: './page-not-found.component.html',
})
export class PageNotFoundComponent {
}
