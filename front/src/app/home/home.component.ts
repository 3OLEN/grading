import { Component } from '@angular/core'
import { PageHeadingComponent } from '../shared/templates/main/page-heading/page-heading.component'

@Component({
    imports: [
        PageHeadingComponent,
    ],
    selector: 'app-home',
    standalone: true,
    styleUrl: './home.component.scss',
    templateUrl: './home.component.html',
})
export class HomeComponent {
    public readonly name = 'OLEN Grading'
}
