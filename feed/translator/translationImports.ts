/**
 * The file is generated. Please don't edit
 */
import {loadTranslationFile} from '@mirohq-internal/translator'

import de from './master/translation.de.json?file'
import en from './master/translation.en.json?file'
import es from './master/translation.es.json?file'
import fr from './master/translation.fr.json?file'
import ja_JP from './master/translation.ja_JP.json?file'
import pt_BR from './master/translation.pt_BR.json?file'

export enum feedTrBranch {
	master = 'master',
}

export const feedTrImport = {
	[feedTrBranch.master]: {
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

export interface IFeedTrKeys {
	// eslint-disable-next-line
	[feedTrBranch.master]: {
		feedNotificationsList: {newLanguagesBanner: {t: 'feed.feedNotificationsList.newLanguagesBanner'}}
		mentions: {warning: {t: 'feed.mentions.warning'}}
		components: {
			feedRateCaption: {t: 'feed.components.feedRateCaption'}
			feedNotificationListUI: {
				goToBoard: {t: 'feed.components.feedNotificationListUI.goToBoard'}
				markAsUnread: {t: 'feed.components.feedNotificationListUI.markAsUnread'}
				markAsRead: {t: 'feed.components.feedNotificationListUI.markAsRead'}
				markAllAsRead: {t: 'feed.components.feedNotificationListUI.markAllAsRead'}
				markAllAsUnread: {t: 'feed.components.feedNotificationListUI.markAllAsUnread'}
				unfollowAllThreads: {t: 'feed.components.feedNotificationListUI.unfollowAllThreads'}
				followAllThreads: {t: 'feed.components.feedNotificationListUI.followAllThreads'}
				goToComment: {t: 'feed.components.feedNotificationListUI.goToComment'}
				unfollowThread: {t: 'feed.components.feedNotificationListUI.unfollowThread'}
				followThread: {t: 'feed.components.feedNotificationListUI.followThread'}
				moreActionsAriaLabel: {t: 'feed.components.feedNotificationListUI.moreActionsAriaLabel'}
				firstTimeGreeting: {t: 'feed.components.feedNotificationListUI.firstTimeGreeting'}
				firstTimeGreetingWithNotification: {
					t: 'feed.components.feedNotificationListUI.firstTimeGreetingWithNotification'
				}
				infoHeading: {t: 'feed.components.feedNotificationListUI.infoHeading'}
				todayGreetingText: {t: 'feed.components.feedNotificationListUI.todayGreetingText'}
				emptyState: {t: 'feed.components.feedNotificationListUI.emptyState'}
				expanderText: {t: 'feed.components.feedNotificationListUI.expanderText'}
				ratingSubmittedMessage: {t: 'feed.components.feedNotificationListUI.ratingSubmittedMessage'}
				threadManuallySubscribedMessage: {t: 'feed.components.feedNotificationListUI.threadManuallySubscribedMessage'}
				threadUnsubscribedMessage: {t: 'feed.components.feedNotificationListUI.threadUnsubscribedMessage'}
				boardManuallySubscribedMessage: {t: 'feed.components.feedNotificationListUI.boardManuallySubscribedMessage'}
				boardUnsubscribedMessage: {t: 'feed.components.feedNotificationListUI.boardUnsubscribedMessage'}
				newNotificationsMessage: {t: 'feed.components.feedNotificationListUI.newNotificationsMessage'}
			}
			feedNotification: {
				showAllUpdates: {t: 'feed.components.feedNotification.showAllUpdates'}
				findOutMoreBtn: {t: 'feed.components.feedNotification.findOutMoreBtn'}
				requestApproved: {t: 'feed.components.feedNotification.requestApproved'}
				requestApprovedByUser: {t: 'feed.components.feedNotification.requestApprovedByUser'}
				dismissed: {t: 'feed.components.feedNotification.dismissed'}
				dismissBtn: {t: 'feed.components.feedNotification.dismissBtn'}
				giveAccessBtn: {t: 'feed.components.feedNotification.giveAccessBtn'}
				giveEditAccessBtn: {t: 'feed.components.feedNotification.giveEditAccessBtn'}
				threadDataContent: {t: 'feed.components.feedNotification.threadDataContent'}
				showUpdates: {t: 'feed.components.feedNotification.showUpdates'}
				replyInThread: {t: 'feed.components.feedNotification.replyInThread'}
			}
		}
		boardSharedMessage: {
			invitedToView: {t: 'feed.boardSharedMessage.invitedToView'}
			invitedToComment: {t: 'feed.boardSharedMessage.invitedToComment'}
			invitedToEdit: {t: 'feed.boardSharedMessage.invitedToEdit'}
		}
		greetingsToPlanMessage: {
			t: 'feed.greetingsToPlanMessage'
			somebodyUpgradedAccount: {t: 'feed.greetingsToPlanMessage.somebodyUpgradedAccount'}
		}
		accessRequestedMessage: {
			accessToEdit: {t: 'feed.accessRequestedMessage.accessToEdit'}
			accessToTeam: {t: 'feed.accessRequestedMessage.accessToTeam'}
		}
		thread: {
			mentionedInNoteMessage: {t: 'feed.thread.mentionedInNoteMessage'}
			youAreFollowing: {t: 'feed.thread.youAreFollowing'}
			learnMore: {t: 'feed.thread.learnMore'}
			lastUpdated: {t: 'feed.thread.lastUpdated'}
			refresh: {t: 'feed.thread.refresh'}
		}
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
	[feedTrBranch.master]: {
		'feed.accessRequestedMessage.accessToEdit': {initiatorName: string | number; boardName: string | number}
		'feed.accessRequestedMessage.accessToTeam': {initiatorName: string | number; boardName: string | number}
		'feed.boardSharedMessage.invitedToComment': {initiatorName: string | number; boardName: string | number}
		'feed.boardSharedMessage.invitedToEdit': {initiatorName: string | number; boardName: string | number}
		'feed.boardSharedMessage.invitedToView': {initiatorName: string | number; boardName: string | number}
		'feed.components.feedNotification.dismissBtn': void
		'feed.components.feedNotification.dismissed': void
		'feed.components.feedNotification.findOutMoreBtn': void
		'feed.components.feedNotification.giveAccessBtn': void
		'feed.components.feedNotification.giveEditAccessBtn': void
		'feed.components.feedNotification.replyInThread': {notificationsCount: string | number; count: number}
		'feed.components.feedNotification.requestApproved': void
		'feed.components.feedNotification.requestApprovedByUser': {actorName: string | number; actorEmail: string | number}
		'feed.components.feedNotification.showAllUpdates': void
		'feed.components.feedNotification.showUpdates': {batchSizeValue: string | number; count: number}
		'feed.components.feedNotification.threadDataContent': void
		'feed.components.feedNotificationListUI.boardManuallySubscribedMessage': void
		'feed.components.feedNotificationListUI.boardUnsubscribedMessage': void
		'feed.components.feedNotificationListUI.emptyState': void
		'feed.components.feedNotificationListUI.expanderText': void
		'feed.components.feedNotificationListUI.firstTimeGreeting': void
		'feed.components.feedNotificationListUI.firstTimeGreetingWithNotification': void
		'feed.components.feedNotificationListUI.followAllThreads': void
		'feed.components.feedNotificationListUI.followThread': void
		'feed.components.feedNotificationListUI.goToBoard': void
		'feed.components.feedNotificationListUI.goToComment': void
		'feed.components.feedNotificationListUI.infoHeading': {userName: string | number}
		'feed.components.feedNotificationListUI.markAllAsRead': void
		'feed.components.feedNotificationListUI.markAllAsUnread': void
		'feed.components.feedNotificationListUI.markAsRead': void
		'feed.components.feedNotificationListUI.markAsUnread': void
		'feed.components.feedNotificationListUI.moreActionsAriaLabel': void
		'feed.components.feedNotificationListUI.newNotificationsMessage': {
			newNotificationsCount: string | number
			count: number
		}
		'feed.components.feedNotificationListUI.ratingSubmittedMessage': void
		'feed.components.feedNotificationListUI.threadManuallySubscribedMessage': void
		'feed.components.feedNotificationListUI.threadUnsubscribedMessage': void
		'feed.components.feedNotificationListUI.todayGreetingText': void
		'feed.components.feedNotificationListUI.unfollowAllThreads': void
		'feed.components.feedNotificationListUI.unfollowThread': void
		'feed.components.feedRateCaption': void
		'feed.feedNotificationsList.newLanguagesBanner': void
		'feed.greetingsToPlanMessage': void
		'feed.greetingsToPlanMessage.somebodyUpgradedAccount': {userName: string | number}
		'feed.mentions.warning': void
		'feed.thread.lastUpdated': {ageInMinutes: string | number}
		'feed.thread.learnMore': void
		'feed.thread.mentionedInNoteMessage': {userName: string | number}
		'feed.thread.refresh': void
		'feed.thread.youAreFollowing': void
	}
}
