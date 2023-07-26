/**
 * The file is generated. Please don't edit
 */

import {TranslationLangKey, Translator} from '@mirohq-internal/translator'
import {feedTrBranch, feedTrImport, IFeedTrKeys, IFeedTrData} from './translationImports'

/* translatorNamespace: "feed" */
export const feedTr = new Translator<feedTrBranch, feedTrBranch.master, IFeedTrKeys, IFeedTrData>({
	translationImports: feedTrImport,
	langKey: TranslationLangKey.en,
	namespace: 'feed',
	branch: feedTrBranch.master,
})
