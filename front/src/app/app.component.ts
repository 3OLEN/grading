import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { FooterComponent } from './shared/layout/footer/footer.component'
import { HeaderComponent } from './shared/layout/header/header.component'

@Component({
    imports: [RouterOutlet, FooterComponent, HeaderComponent, HomeComponent],
    selector: 'app-root',
    standalone: true,
    styleUrl: './app.component.scss',
    templateUrl: './app.component.html',
})
export class AppComponent {
}
