/**
 * The file is generated. Please don't edit
 */
import de from './master/translation.de.json?file'
import en from './master/translation.en.json?file'
import es from './master/translation.es.json?file'
import fr from './master/translation.fr.json?file'
import ja_JP from './master/translation.ja_JP.json?file'
import pt_BR from './master/translation.pt_BR.json?file'
import {loadTranslationFile} from '@mirohq-internal/translator'

export enum navBarTrBranch {
	master = 'master',
}

export const navBarTrImport = {
	[navBarTrBranch.master]: {
		lang: {
			de: () => loadTranslationFile(de),
			en: () => loadTranslationFile(en),
			es: () => loadTranslationFile(es),
			fr: () => loadTranslationFile(fr),
			ja_JP: () => loadTranslationFile(ja_JP),
			pt_BR: () => loadTranslationFile(pt_BR),
		},
	},
} as const

export interface INavBarTrKeys {
	// eslint-disable-next-line
	[navBarTrBranch.master]: {
		components: {
			navigationBarToggle: {
				closeSidebar: {t: 'navBar.components.navigationBarToggle.closeSidebar'}
				openSidebar: {t: 'navBar.components.navigationBarToggle.openSidebar'}
				navigationBar: {t: 'navBar.components.navigationBarToggle.navigationBar'}
				closeButton: {t: 'navBar.components.navigationBarToggle.closeButton'}
				openButton: {t: 'navBar.components.navigationBarToggle.openButton'}
			}
		}
		paidPlanOnboarding: {
			boardHistory: {
				minimizedSidebarIcon: {
					tooltip: {
						content: {t: 'navBar.paidPlanOnboarding.boardHistory.minimizedSidebarIcon.tooltip.content'}
						title: {t: 'navBar.paidPlanOnboarding.boardHistory.minimizedSidebarIcon.tooltip.title'}
					}
				}
			}
		}
	}
}

// eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
interface ListFormatOptions {
	localeMatcher?: string
	type?: string
	style?: string
}

export interface INavBarTrData {
	// eslint-disable-next-line
	[navBarTrBranch.master]: {
		'navBar.components.navigationBarToggle.closeButton': {title: string | number}
		'navBar.components.navigationBarToggle.closeSidebar': void
		'navBar.components.navigationBarToggle.navigationBar': void
		'navBar.components.navigationBarToggle.openButton': {title: string | number}
		'navBar.components.navigationBarToggle.openSidebar': void
		'navBar.paidPlanOnboarding.boardHistory.minimizedSidebarIcon.tooltip.content': void
		'navBar.paidPlanOnboarding.boardHistory.minimizedSidebarIcon.tooltip.title': void
	}
}
