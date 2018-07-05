import storageService from "./storage-service.js";
import utilsService from "./utils-service.js";

var EMAILS_KEY = 'EMAILS_KEY'




var emails = [{
        id: utilsService.makeid(),
        subject: 'momo',
        body: 'i am a momo',
        isRead: false,
        sentAt: '',
        sentTo: 'fofo'
    },
    {
        id: utilsService.makeid(),
        subject: 'popo',
        body: 'i am a popo',
        isRead: false,
        sentAt: '',
        sentTo: 'poo'
    },
    {
        id: utilsService.makeid(),
        subject: 'dodo',
        body: 'i am a DODO',
        isRead: false,
        sentAt: '',
        sentTo: 'foo'
    },
    {
        id: utilsService.makeid(),
        subject: 'momo',
        body: 'i am a momo',
        isRead: false,
        sentAt: '',
        sentTo: 'fofo'
    },
    {
        id: utilsService.makeid(),
        subject: 'popo',
        body: 'i am a popo',
        isRead: false,
        sentAt: '',
        sentTo: 'poo'
    },
    {
        id: utilsService.makeid(),
        subject: 'dodo',
        body: 'i am a DODO',
        isRead: false,
        sentAt: '',
        sentTo: 'foo'
    },
]

function getEmails() {
    var loadEmails =  storageService.load(EMAILS_KEY)
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
}
export default {
    getEmails,
    getEmailById,
    removeEmailById,
}