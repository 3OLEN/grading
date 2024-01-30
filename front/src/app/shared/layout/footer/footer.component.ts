import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { faBrandGithub } from '@ng-icons/font-awesome/brands';

@Component({
    selector: 'layout-footer',
    standalone: true,
    imports: [
        NgIconComponent
    ],
    providers: [
        provideIcons({ faBrandGithub })
    ],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss'
})
export class FooterComponent {
    currentYear: number = (new Date()).getFullYear()
}
