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

export enum selectTrBranch {
	master = 'master',
}

export const selectTrImport = {
	[selectTrBranch.master]: {
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

export interface ISelectTrKeys {
	// eslint-disable-next-line
	[selectTrBranch.master]: {common: {choose: {t: 'select.common.choose'}}}
}

// eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
interface ListFormatOptions {
	localeMatcher?: string
	type?: string
	style?: string
}

export interface ISelectTrData {
	// eslint-disable-next-line
	[selectTrBranch.master]: {'select.common.choose': void}
}
