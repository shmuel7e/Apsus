import noteService from '../services/noteService.js'
import NotePreview from '../../notes/cmps/NotePreview.jsx'
import eventBusService from '../../services/eventBusService.js';

export default class NoteListPage extends React.Component {
    state = {
        notes: [],
        info: '',
        type: '',
        inputType: 'txt'
    }

    componentDidMount() {
        this.eventKiller = eventBusService.on('noteChanged', () => {
            this.loadNotes()
        });
        this.loadNotes()
    }

    loadNotes = () => {
        noteService.getNotes().then(notes => {
            this.setState({ notes })
        })
    }

    onAddNote = () => {
        if (this.state.info === '') return;
        noteService.addNote(this.state.info, this.state.type).then(notes => {
            this.setState({ notes, info: '' })
        })
    }

    inputChange = (ev) => {
        ev.persist()
        let fieldName = ev.target.name;
        let value = ev.target.value;
        this.setState({ type: fieldName, info: value })
    }

    onkeyup = (ev) => {
        if (event.keyCode === 13) this.onAddNote();
    }

    DynamicInput = (inputType) => {
        switch (inputType) {

            case 'txt':
                return <input onKeyUp={this.onkeyup} className="add-note-input" type="text" value={this.state.info} onChange={this.inputChange} placeholder="Take a note..." name="NoteText" />
            case 'img':
                return <input onKeyUp={this.onkeyup} className="add-note-input" type="text" value={this.state.info} onChange={this.inputChange} placeholder="Add image URL..." name="NoteImg" />
            case 'todos':
                return <input onKeyUp={this.onkeyup} className="add-note-input" type="text" value={this.state.info} onChange={this.inputChange} placeholder="Add todo title" name="NoteTodos" />
            case 'video':
                return <input onKeyUp={this.onkeyup} className="add-note-input" type="text" value={this.state.info} onChange={this.inputChange} placeholder="Add youtube URL..." name="NoteVideo" />
            default:
                return
        }
    }

    onChangeInputType = (type) => {
        this.setState({ inputType: type, info: '' })
    }


    render() {
        return (
            <section className="note-body">
                <div className="add-notes-container">
                    <div>{this.DynamicInput(this.state.inputType)}</div>
                    <button className="add-note-btn" onClick={() => this.onChangeInputType('txt')} title="text"><i className="fas fa-font"></i></button>
                    <button className="add-note-btn" onClick={() => this.onChangeInputType('img')} title="image"><i className="fas fa-image"></i></button>
                    <button className="add-note-btn" onClick={() => this.onChangeInputType('video')} title="video"><i className="fab fa-youtube"></i></button>
                    <button className="add-note-btn" onClick={() => this.onChangeInputType('todos')} title="todo"><i className="fas fa-list"></i></button>
                    <button className="add-note-btn add" onClick={this.onAddNote} title="Add">ADD</button>
                </div>
                <div className="notes-container">
                    {this.state.notes.some(note => note.isPinned) && <h3 className="pinned-title">Pinned</h3>}
                    {this.state.notes.filter((note) => note.isPinned).map((note, i) => <NotePreview key={i} note={note}></NotePreview>)}
                </div>
                <div className="notes-container">
                    {this.state.notes.some(note => note.isPinned) && <h3 className="pinned-title">others</h3>}
                    {this.state.notes.filter((note) => !note.isPinned).map((note, i) => <NotePreview key={i} note={note}></NotePreview>)}
                </div>
            </section>
        )
    }
}