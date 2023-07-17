/**
 * The file is generated. Please don't edit
 */
import en from './master/translation.en.json?file'
import fr from './master/translation.fr.json?file'
import de from './master/translation.de.json?file'
import ja_JP from './master/translation.ja_JP.json?file'
import es from './master/translation.es.json?file'
import pt_BR from './master/translation.pt_BR.json?file'
import {loadTranslationFile} from '@mirohq-internal/translator'

export enum feedTrBranch {
	master = 'master',
}

export const feedTrImport = {
	[feedTrBranch.master]: {
		lang: {
			en: () => loadTranslationFile(en),
			fr: () => loadTranslationFile(fr),
			de: () => loadTranslationFile(de),
			ja_JP: () => loadTranslationFile(ja_JP),
			es: () => loadTranslationFile(es),
			pt_BR: () => loadTranslationFile(pt_BR),
		},
	},
} as const

export interface IFeedTrKeys {
	// eslint-disable-next-line
	[feedTrBranch.master]: {
		feedNotificationsList: {newLanguagesBanner: {t: 'feed.feedNotificationsList.newLanguagesBanner'}}
		mentions: {warning: {t: 'feed.mentions.warning'}}
	}
}

// eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
interface ListFormatOptions {
	localeMatcher?: string
	type?: string
	style?: string
}

export interface IFeedTrData {
	// eslint-disable-next-line
	[feedTrBranch.master]: {'feed.feedNotificationsList.newLanguagesBanner': void; 'feed.mentions.warning': void}
}
