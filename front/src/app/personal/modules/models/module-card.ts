import { type ModuleAssessment } from './module-assessment'
import { type ModuleSession } from './module-session'

export type ModuleCard = {
    id: number
    name: string
    promotion: string
    assessments: ModuleAssessment[]
    sessions: ModuleSession[]
    nextSession?: ModuleSession | null
}
