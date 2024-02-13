import { Injectable } from '@angular/core'
import { type Observable, of } from 'rxjs'
import { type ModuleCard } from '../../modules/models/module-card'
import { MODULES } from './modules.mock'

@Injectable({
    providedIn: 'root',
})
export class ModulesDataProvider {
    public getCurrentModules(): Observable<ModuleCard[]> {
        return of(MODULES)
    }

    public getById(moduleId: number): ModuleCard {
        const correspondingModule = MODULES.find(module => module.id === moduleId)
        if (typeof correspondingModule === 'undefined') {
            throw new TypeError(`No personal module for #${moduleId}.`)
        }

        return correspondingModule
    }
}
