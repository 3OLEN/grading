import { Component } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
    selector: 'layout-header',
    standalone: true,
    imports: [
        MatIconButton,
        MatIcon
    ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {
    readonly appTitle = 'OLEN Grading';
}
