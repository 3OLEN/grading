/* eslint-disable canonical/sort-keys, sonarjs/no-duplicate-string */
import { type ModuleCard } from '../../modules/models/module-card'

export const MODULES: ModuleCard[] = [
    {
        id: 11,
        name: 'Architecture application web, Git, qualité application',
        promotion: '3OLEN',
        assessments: [
            {
                id: 111,
                label: 'Test de positionnement',
                date: new Date(2023, 9, 2),
                type: 'test-positionnement',
            },
            {
                id: 112,
                label: 'TP Git',
                date: new Date(2023, 9, 9),
                type: 'tp',
            },
            {
                id: 113,
                label: 'TP API',
                date: new Date(2023, 9, 24),
                type: 'tp',
            },
            {
                id: 114,
                label: 'TP Cahier de recette',
                date: new Date(2023, 9, 29),
                type: 'tp',
            },
            {
                id: 115,
                label: 'TP Tests unitaires',
                date: new Date(2023, 9, 29),
                type: 'tp',
            },
            {
                id: 116,
                label: 'Partiel',
                date: new Date(2023, 10, 6),
                type: 'partiel',
            },
            {
                id: 117,
                label: 'Rattrapage',
                date: new Date(2024, 2, 27),
                type: 'rattrapage',
            },
        ],
        sessions: [],
    },
    {
        id: 12,
        name: 'Projet 31',
        promotion: '3OLEN',
        assessments: [
            {
                id: 0,
                label: 'Version 1',
                date: new Date(2024, 1, 17),
                type: 'rendu',
            },
            {
                id: 0,
                label: 'Soutenance finale',
                date: new Date(2024, 2, 26),
                type: 'soutenance',
            },
        ],
        sessions: [
            {
                label: 'Vendredi 9 février',
                type: 'cours',
                date: new Date(2024, 1, 9),
            },
            {
                label: 'Mardi 26 mars',
                type: 'soutenance',
                date: new Date(2024, 2, 26),
            },
        ],
        nextSession: {
            label: 'Vendredi 9 février',
            type: 'cours',
            date: new Date(2024, 1, 9),
        },
    },
    {
        id: 13,
        name: 'Framework Symfony',
        promotion: '3OLEN',
        assessments: [],
        sessions: [
            {
                label: 'Mardi 2 avril',
                type: 'cours',
                date: new Date(2024, 3, 2),
            },
            {
                label: 'Jeudi 4 avril',
                type: 'cours',
                date: new Date(2024, 3, 4),
            },
            {
                label: 'Vendredi 5 avril',
                type: 'cours',
                date: new Date(2024, 3, 5),
            },
            {
                label: 'Lundi 8 avril',
                type: 'cours',
                date: new Date(2024, 3, 8),
            },
            {
                label: 'Lundi 6 mai',
                type: 'cours',
                date: new Date(2024, 4, 6),
            },
            {
                label: 'Lundi 13 mai',
                type: 'cours',
                date: new Date(2024, 4, 13),
            },
            {
                label: 'Lundi 23 mai',
                type: 'cours',
                date: new Date(2024, 4, 23),
            },
            {
                label: 'Lundi 27 mai',
                type: 'partiel',
                date: new Date(2024, 4, 27),
            },
        ],
        nextSession: {
            label: 'Mardi 2 avril',
            type: 'cours',
            date: new Date(2024, 3, 2),
        },
    },
    {
        id: 14,
        name: 'Projet 32',
        promotion: '3OLEN',
        assessments: [],
        sessions: [
            {
                label: 'Lundi 13 mai',
                type: 'cours',
                date: new Date(2024, 4, 13),
            },
            {
                label: 'Mardi 28 mai',
                type: 'cours',
                date: new Date(2024, 4, 28),
            },
            {
                label: 'Mardi 4 juin',
                type: 'cours',
                date: new Date(2024, 5, 4),
            },
            {
                label: 'Lundi 17 juin',
                type: 'cours',
                date: new Date(2024, 5, 17),
            },
            {
                label: 'Lundi 1 juillet',
                type: 'cours',
                date: new Date(2024, 6, 1),
            },
            {
                label: 'Mardi 2 juillet',
                type: 'soutenance',
                date: new Date(2024, 6, 2),
            },
        ],
        nextSession: {
            label: 'Lundi 13 mai',
            type: 'cours',
            date: new Date(2024, 4, 13),
        },
    },
]
