import noteService from '../../notes/services/noteService.js'
import NotePreview from '../../notes/cmps/NotePreview.jsx'


export default class NotePage extends React.Component {
    state = {
        note: null
    }

    componentDidMount() {
        this.loadNote();
    }


    loadNote() {
        const { id } = this.props.match.params;
        noteService.getNoteById(id).then(note => {
            this.setState({ note })
        })
    }

    render() {
        if (!this.state.note) return <div>Loading...</div>
        return <div>
            <NotePreview note={this.state.note}/>
        </div>

    }
}
