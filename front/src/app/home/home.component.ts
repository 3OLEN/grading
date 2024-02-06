import { Component } from '@angular/core'

@Component({
    selector: 'app-home',
    standalone: true,
    styleUrl: './home.component.scss',
    templateUrl: './home.component.html',
})
export class HomeComponent {
    public readonly name = 'OLEN Grading'
}
