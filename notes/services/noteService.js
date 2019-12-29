'use strict'
import utils from '../../services/utils.js'
import storageService from '../../services/storageService.js'
import eventBusService from "../../services/eventBusService.js";
import TxtNote from '../../notes/services/TxtNote.js'
import ImgNote from '../../notes/services/ImgNote.js'
import TodoNote from '../../notes/services/TodoNote.js'
import VideoNote from '../../notes/services/VideoNote.js'

export default {
    getNotes,
    getNoteById,
    editNoteTxt,
    deleteNote,
    toggleTodoStatus,
    editTodoTxt,
    addNote,
    addNoteTodo,
    ChangeNoteColor,
    togglePinned,
    cloneNote
}

let gNotes = [
    {
        id: utils.getRandomID(),
        type: "NoteText",
        isPinned: false,
        info: {
            title: "You can Do this!",
            txt: "Do not be afraid of fear"
        },
        style: {
            backgroundColor: "note-defualt-color"
        }
    },
    {
        id: utils.getRandomID(),
        type: "NoteImg",
        isPinned: false,
        info: {
            url: "https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.0-9/13102863_10206290371366052_3929269278468270841_n.jpg?_nc_cat=110&_nc_ohc=zTCQ1Qdsn-EAQk2k3efDIlPZUjKFxxBZZsxY9_BtV3NCT0wB85Ct97aPg&_nc_ht=scontent.ftlv5-1.fna&oh=57d1e5b0e94fc4448c12ba2862ec4cbf&oe=5E6C6C8D",
            title: "Beautiful view from Machu Picchu",
            txt: "It was worth it after a million stairs..."
        },
        style: {
            backgroundColor: "note-brown-color"
        }
    },
    {
        id: utils.getRandomID(),
        type: "NoteVideo",
        isPinned: false,
        info: {
            url: "https://www.youtube.com/watch?v=MBerhd8bXjY",
            title: "Samuel's favorite song",
            txt: "What a douchebag.."
        },
        style: {
            backgroundColor: "note-pink-color"
        }
    },
    {
        id: utils.getRandomID(),
        type: "NoteTodos",
        isPinned: false,
        info: {
            title: "To do list",
            todos: [
                { id: 1, txt: "Go buy some milk", doneAt: Date.now() - 1000000, isDone: false },
                { id: 2, txt: "Visit your grandma", doneAt: Date.now() - 1000, isDone: true }
            ]
        },
        style: {
            backgroundColor: "note-grey-color"
        }
    },
    {
        id: utils.getRandomID(),
        type: "NoteText",
        isPinned: false,
        info: {
            title: "Credit card pin code:",
            txt: "5792"
        },
        style: {
            backgroundColor: "note-defualt-color"
        }
    },
    {
        id: utils.getRandomID(),
        type: "NoteImg",
        isPinned: false,
        info: {
            url: "https://qph.fs.quoracdn.net/main-qimg-225232d1b893f689e7d24ad42e6a0de7",
            title: "Itachi and Sasuke",
            txt: "Best moment in naruto"
        },
        style: {
            backgroundColor: "note-defualt-color"
        }
    },
    {
        id: utils.getRandomID(),
        type: "NoteTodos",
        isPinned: true,
        info: {
            title: "Things to do each day:",
            todos: [
                { id: 1, txt: "Eat a Banana", doneAt: Date.now() - 10000489, isDone: false },
                { id: 2, txt: "Go to the gym", doneAt: 1577281200513, isDone: true }
            ]
        },
        style: {
            backgroundColor: "note-dark-blue-color"
        }
    },
    {
        id: utils.getRandomID(),
        type: "NoteVideo",
        isPinned: false,
        info: {
            url: "https://www.youtube.com/watch?v=L_LUpnjgPso",
            title: "I have no money for a radiator",
            txt: ""
        },
        style: {
            backgroundColor: "note-defualt-color"
        }
    },
    {
        id: utils.getRandomID(),
        type: "NoteImg",
        isPinned: false,
        info: {
            url: "https://scontent.ftlv5-1.fna.fbcdn.net/v/t31.0-8/29355181_10211454886875712_3185929934373046847_o.jpg?_nc_cat=103&_nc_ohc=_4d2prN5rQ4AQlM4JB8RWVmwoqiEo2EipGg24HNKlfw3_KYcSQfckXI_A&_nc_ht=scontent.ftlv5-1.fna&oh=16a729568b36d5bbd7f16f444024a920&oe=5EA473A7",
            title: "My beautiful motorcycle (R.I.P.)",
            txt: ""
        },
        style: {
            backgroundColor: "note-green-color"
        }
    }

];

function togglePinned (note){
    let copyNote = JSON.parse(JSON.stringify(note));
    copyNote.isPinned = !copyNote.isPinned;
    gNotes = gNotes.map(note => copyNote.id === note.id ? copyNote : note);
    storageService.store('notes', gNotes);
    eventBusService.emit('noteChanged');
}

function ChangeNoteColor (note,colorclassName) {
    let copyNote = JSON.parse(JSON.stringify(note));
    copyNote.style.backgroundColor = colorclassName;
    gNotes = gNotes.map(note => copyNote.id === note.id ? copyNote : note);
    storageService.store('notes', gNotes);
    eventBusService.emit('noteChanged');
}

function getNotes() {
    if (storageService.load('notes')) {
        gNotes = storageService.load('notes');
    } else {
        storageService.store('notes', gNotes);
    }
    return Promise.resolve([...gNotes]);
}

function cloneNote(note){
    let copyNote = JSON.parse(JSON.stringify(note));
    copyNote.id = utils.getRandomID();
    gNotes = [...gNotes, copyNote];
    storageService.store('notes', gNotes);
    eventBusService.emit('noteChanged');
}

function addNote(info, type) {
    let note;
    switch (type) {
        case 'NoteText':
            note = new TxtNote(info, type);
            gNotes = [...gNotes, note];
            storageService.store('notes', gNotes);
            return Promise.resolve(gNotes);
        case 'NoteImg':
            note = new ImgNote(info, type);
            gNotes = [...gNotes, note];
            storageService.store('notes', gNotes);
            return Promise.resolve(gNotes);
        case 'NoteTodos':
            note = new TodoNote(info, type);
            gNotes = [...gNotes, note];
            storageService.store('notes', gNotes);
            return Promise.resolve(gNotes);
        case 'NoteVideo':
            note = new VideoNote(info, type);
            gNotes = [...gNotes, note];
            storageService.store('notes', gNotes);
            return Promise.resolve(gNotes);
        default:
            break; 
    }

}

function addNoteTodo(note) {
    let copyNote = JSON.parse(JSON.stringify(note));
    copyNote.info.todos.push({ id: utils.getRandomID(), txt: "", doneAt: Date.now(), isDone: false })
    gNotes = gNotes.map(note => copyNote.id === note.id ? copyNote : note);
    storageService.store('notes', gNotes);
    eventBusService.emit('noteChanged');
    return Promise.resolve(copyNote);
}

function deleteNote(note) {
    gNotes = gNotes.filter((currNote) => currNote.id !== note.id);
    storageService.store('notes', gNotes);
    eventBusService.emit('noteChanged');
}

function editNoteTxt(txt, contentType, note) {
    let copyNote = JSON.parse(JSON.stringify(note));
    copyNote.info[contentType] = txt;
    gNotes = gNotes.map(note => copyNote.id === note.id ? copyNote : note);
    storageService.store('notes', gNotes);
    eventBusService.emit('noteChanged');
    return Promise.resolve(copyNote);
}

function toggleTodoStatus(note, todo) {
    let copyNote = JSON.parse(JSON.stringify(note));
    todo.isDone = !todo.isDone;
    copyNote.info.todos = copyNote.info.todos.map(currTodo => currTodo.id === todo.id ? todo : currTodo);
    gNotes = gNotes.map(note => copyNote.id === note.id ? copyNote : note);
    storageService.store('notes', gNotes);
    eventBusService.emit('noteChanged');
    return Promise.resolve(copyNote);
}

function editTodoTxt(txt, todo, note) {
    let copyNote = JSON.parse(JSON.stringify(note));
    todo.txt = txt;
    todo.doneAt = Date.now()
    copyNote.info.todos = copyNote.info.todos.map(currTodo => currTodo.id === todo.id ? todo : currTodo);
    gNotes = gNotes.map(note => copyNote.id === note.id ? copyNote : note);
    storageService.store('notes', gNotes);
    eventBusService.emit('noteChanged');
    return Promise.resolve(copyNote);
}

function getNoteById(NoteId) {
    if (storageService.load('notes')) gNotes = storageService.load('notes');
    const note = gNotes.find(note => note.id == NoteId);
    return Promise.resolve(note);
}