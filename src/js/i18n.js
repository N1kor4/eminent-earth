export const ui = {
    en: {
        'nav.prev': 'Previous',
        'nav.next': 'Next',
        'guide.sections': 'Guide Sections',
        'guide.extras': 'Extras',
        'guide.news': 'News',
        'phase.1': 'Phase 1: The Physical Foundation',
        'phase.2': 'Phase 2: The Fight for Digital Control',
        'phase.3': 'Phase 3: The Modern Age of Information',
    },
    fr: {
        'nav.prev': 'Précédent',
        'nav.next': 'Suivant',
        'guide.sections': 'Sections du Guide',
        'guide.extras': 'Extras',
        'guide.news': 'Actualités',
        'phase.1': 'Phase 1 : Les Fondations Physiques',
        'phase.2': 'Phase 2 : La Lutte pour le Contrôle Numérique',
        'phase.3': 'Phase 3 : L\'Ère Moderne de l\'Information',
    }
};

export function useTranslations(lang) {
    return function t(key) {
        return ui[lang]?.[key] || ui['en'][key];
    }
}
