const { Link } = ReactRouterDOM
import NoteText from '../../notes/cmps/NoteText.jsx'
import NoteImg from '../../notes/cmps/NoteImg.jsx'
import NoteTodos from '../../notes/cmps/NoteTodos.jsx'
import NoteVideo from '../../notes/cmps/NoteVideo.jsx'
import eventBusService from '../../services/eventBusService.js'
import noteService from '../services/noteService.js'

export default class NotePreview extends React.Component {

    onOpenModal = (note) => {
        eventBusService.emit('showNoteModal', note);
    }

    onDeleteNote = () => {
        noteService.deleteNote(this.props.note);
    }

    onChangeColor = (colorClassName) => {
        noteService.ChangeNoteColor(this.props.note,colorClassName);
    }

    onTogglePinned = () => {
        noteService.togglePinned(this.props.note);
    }

    toggleTodo = (note,todo) => {
        noteService.toggleTodoStatus(note, todo);
    }

    cloneNote = (note) => {
        noteService.cloneNote(note);
    }

    DynamicCmp = (note) => {
        switch (note.type) {
            case 'NoteText':
                return <NoteText note={note} openModal={this.onOpenModal}></NoteText>
            case 'NoteImg':
                return <NoteImg note={note} openModal={this.onOpenModal}></NoteImg>
            case 'NoteTodos':
                return <NoteTodos note={note} openModal={this.onOpenModal} toggleTodo={this.toggleTodo}></NoteTodos>
            case 'NoteVideo':
                return <NoteVideo note={note} openModal={this.onOpenModal}></NoteVideo>
            default:
                return
        }
    }

    render() {
        const { props } = this;
        return <div className={`note-container ${props.note.style.backgroundColor}`} >{this.DynamicCmp(props.note)}
            <div className="btn-container">
                <div className='note-btn' onClick={this.onDeleteNote}><i className="far fa-trash-alt"></i></div>
                <div className='note-btn' onClick={this.onTogglePinned}><i className="fas fa-thumbtack"></i></div>
                <div className='note-btn' onClick={()=>this.onOpenModal(props.note)}><i className="fas fa-edit"></i></div>
                <div className='note-btn' onClick={()=>this.cloneNote(props.note)}><i className="fas fa-clone"></i></div>
               <Link to={`/emailApp`}> <div className='note-btn'><i className="fas fa-paper-plane"></i></div></Link>
                <div className='note-btn note-color-btn'>
                    <i className="fas fa-palette"></i>
                    <div className="colors-container">
                        <div onClick={()=>this.onChangeColor('note-defualt-color')} className="color defualt-color"></div>
                        <div onClick={()=>this.onChangeColor('note-red-color')} className="color red-color"></div>
                        <div onClick={()=>this.onChangeColor('note-orange-color')} className="color orange-color"></div>
                        <div onClick={()=>this.onChangeColor('note-yellow-color')} className="color yellow-color"></div>
                        <div onClick={()=>this.onChangeColor('note-green-color')} className="color green-color"></div>
                        <div onClick={()=>this.onChangeColor('note-teal-color')} className="color teal-color"></div>
                        <div onClick={()=>this.onChangeColor('note-blue-color')} className="color blue-color"></div>
                        <div onClick={()=>this.onChangeColor('note-dark-blue-color')} className="color dark-blue-color"></div>
                        <div onClick={()=>this.onChangeColor('note-purple-color')} className="color purple-color"></div>
                        <div onClick={()=>this.onChangeColor('note-pink-color')} className="color pink-color"></div>
                        <div onClick={()=>this.onChangeColor('note-brown-color')} className="color brown-color"></div>
                        <div onClick={()=>this.onChangeColor('note-grey-color')} className="color grey-color"></div>
                    </div>
                </div>

            </div>
        </div>
    }
}