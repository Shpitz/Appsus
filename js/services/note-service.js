import storageService from "./storage-service.js";
import utilsService from "./utils-service.js";

var NOTES_KEY = 'NOTES_KEY';

var notes = [{
    title: 'feed the dog',
    txt: {
        hasTxt: true,
        txtVal: 'he must ead bonzo',
    },
    img: {
        hasImg: false,
        imgSrc: ''
    },
    todos: {
        hasTodos: false,
        todosVal: []
    },
    bgColor: 'lightblue',
    isPinned: false
},
{
    title: 'shopping',
    txt: {
        hasTxt: true,
        txtVal: 'Rami is Gof',
    },
    img: {
        hasImg: false,
        imgSrc: ''
    },
    todos: {
        hasTodos: true,
        todosVal: ['dress', 'flowers', 'cookies']
    },
    bgColor: 'orange',
    isPinned: false
},
{
    title: 'at the Eurovision',
    txt: {
        hasTxt: true,
        txtVal: 'SO EXCITEDDDDDD!!!!',
    },
    img: {
        hasImg: true,
        imgSrc: '../img/itzik.jpg'
    },
    todos: {
        hasTodos: false,
        todosVal: []
    },
    bgColor: 'lightgreen',
    isPinned: false
}
]

function getNotes() {
    return Promise.resolve(notes)
}


var emptyNote = [
    {
        title: '',
        txt: {
            hasTxt: false,
            txtVal: '',
        },
        img: {
            hasImg: false,
            imgSrc: 'img src"'
        },
        todos: {
            hasTodos: false,
            todosVal: []
        },
        bgColor: 'lightblue',
        isPinned: false
    }
]


export default {
    getNotes,
}
