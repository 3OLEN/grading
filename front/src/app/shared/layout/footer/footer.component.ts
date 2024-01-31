import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { faBrandGithub } from '@ng-icons/font-awesome/brands';

@Component({
    imports: [
        NgIconComponent,
    ],
    providers: [
        provideIcons({ faBrandGithub }),
    ],
    selector: 'layout-footer',
    standalone: true,
    styleUrl: './footer.component.scss',
    templateUrl: './footer.component.html',
})
export class FooterComponent {
    public readonly currentYear: number = new Date().getFullYear()
}
