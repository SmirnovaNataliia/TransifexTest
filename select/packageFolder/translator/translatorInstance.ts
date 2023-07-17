/**
 * The file is generated. Please don't edit
 */

import {TranslationLangKey, Translator} from '@mirohq-internal/translator'
import {selectTrBranch, selectTrImport, ISelectTrKeys, ISelectTrData} from './translationImports'

/* translatorNamespace: "select" */
export const selectTr = new Translator<selectTrBranch, selectTrBranch.master, ISelectTrKeys, ISelectTrData>({
	translationImports: selectTrImport,
	langKey: TranslationLangKey.en,
	namespace: 'select',
	branch: selectTrBranch.master,
})
