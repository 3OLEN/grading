import { FooterComponent } from './shared/layout/footer/footer.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    imports: [RouterOutlet, FooterComponent, HeaderComponent],
    selector: 'app-root',
    standalone: true,
    styleUrl: './app.component.scss',
    templateUrl: './app.component.html',
})
export class AppComponent {
    public readonly title = 'OLEN Grading';
}
