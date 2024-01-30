import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { HeaderComponent } from './shared/layout/header/header.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, FooterComponent, HeaderComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    readonly title = 'OLEN Grading';
}
