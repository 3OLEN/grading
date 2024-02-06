import { Component, Input } from '@angular/core'

@Component({
    imports: [],
    selector: 'templates-main-page-heading',
    standalone: true,
    styleUrl: './page-heading.component.scss',
    templateUrl: './page-heading.component.html',
})
export class PageHeadingComponent {
    @Input({ required: true })
    public get title(): string {
        return this._title
    }

    public set title(title: string) {
        if (this._title) {
            throw new Error(`\`title\` has already been defined: « ${this._title} ».`)
        }

        if (title.trim().length === 0) {
            throw new Error('`title` is required!')
        }

        this._title = title
    }

    private _title!: string
}
