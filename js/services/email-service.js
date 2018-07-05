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
]

function getEmails() {
    return storageService.load(EMAILS_KEY)
        .then((loadEmails) => {
            if (!loadEmails) {
                console.log(emails);
                return emails
            } else {
                emails = loadEmails
                return emails
            }
        })
}


export default {
    getEmails,
}