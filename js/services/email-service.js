import storageService from "./storage-service.js";
import utilsService from "./utils-service.js";

var EMAILS_KEY = 'EMAILS_KEY'




var emails = [{
        id: utilsService.makeid(),
        subject: 'momo',
        body: 'i am a momo',
        isRead: false,
        sentAt: '1-2-2018',
        sentTo: 'fofo'
    },
    {
        id: utilsService.makeid(),
        subject: 'popo',
        body: 'i am a popo',
        isRead: false,
        sentAt: '1-7-2018',
        sentTo: 'poo'
    },
    {
        id: utilsService.makeid(),
        subject: 'dodo',
        body: 'i am a itzik DODO',
        isRead: false,
        sentAt: '5-5-2016',
        sentTo: 'foo'
    },
    {
        id: utilsService.makeid(),
        subject: 'momo',
        body: 'i am a momo',
        isRead: false,
        sentAt: '30-2-2005',
        sentTo: 'fofo'
    },
    {
        id: utilsService.makeid(),
        subject: 'popo',
        body: 'i am a popo',
        isRead: false,
        sentAt: '21-2-1997',
        sentTo: 'poo'
    },
    {
        id: utilsService.makeid(),
        subject: 'dodo',
        body: 'i am a DODO',
        isRead: false,
        sentAt: '3-12-2017',
        sentTo: 'foo'
    },
]

function getEmails() {
    var loadEmails = storageService.load(EMAILS_KEY)
    if (!loadEmails) {
        console.log(emails);
        return Promise.resolve(emails)
    } else {
        emails = loadEmails
        return Promise.resolve(emails)
    }

}

function getEmailById(id) {
    storageService.store(EMAILS_KEY, emails)
    var wanntedEmail = emails.find(email => {
        return email.id === id
    })
    return Promise.resolve(wanntedEmail)
}

function removeEmailById(id) {
    var emailIdx = emails.findIndex(email => {
        return email.id === id
    })
    emails.splice(emailIdx, 1)
    storageService.store(EMAILS_KEY, emails)
}

function saveEmail(newEmail) {
    emails.unshift(newEmail)
    storageService.store(EMAILS_KEY, emails)
}

export default {
    getEmails,
    getEmailById,
    removeEmailById,
    saveEmail,
}
