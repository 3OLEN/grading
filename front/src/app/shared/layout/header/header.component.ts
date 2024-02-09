import { Component } from '@angular/core'
import { MatIconButton } from '@angular/material/button'
import { MatIcon } from '@angular/material/icon'
import { MatTooltip } from '@angular/material/tooltip'
import { RouterLink } from '@angular/router'

@Component({
    imports: [
        MatIconButton,
        MatIcon,
        RouterLink,
        MatTooltip,
    ],
    selector: 'layout-header',
    standalone: true,
    styleUrl: './header.component.scss',
    templateUrl: './header.component.html',
})
export class HeaderComponent {
    public readonly appTitle = 'OLEN Grading'
}
