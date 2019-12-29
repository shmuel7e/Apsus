
export default class NoteVideoModal extends React.Component {

    state = { embedLink: '' }

    componentDidMount() {
        this.ConvertLinkToEmbed();
    }

    ConvertLinkToEmbed = () => {
        let url = this.props.note.info.url;
        let idx = url.lastIndexOf("=");
        let embedLink = url.substring(idx + 1);
        this.setState({ embedLink });
    }

    handleCloseModal = () => {
        this.props.onCloseModal();
    }

    onTxtChange = (editedTxt, contentType) => {
        this.props.editTxtNote(editedTxt, contentType);
    }

    render() {
        const { props } = this;
        return <div className="modal" onClick={this.handleCloseModal}>
            <div className={`inner-container ${props.note.style.backgroundColor}`} onClick={(ev) => ev.stopPropagation()}>
                <span className="close-Modal" onClick={this.handleCloseModal}><i className="fas fa-window-close"></i></span>
                <iframe className="note-img-modal" src={`https://www.youtube.com/embed/${this.state.embedLink}?autoplay=1`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <div className="modal-title" data-text="Title" suppressContentEditableWarning={true} contentEditable="true" onBlur={(e) => this.onTxtChange(e.target.textContent, 'title')}>{props.note.info.title}</div>
                <div className="modal-txt" data-text="Note" suppressContentEditableWarning={true} contentEditable="true" onBlur={(e) => this.onTxtChange(e.target.textContent, 'txt')}>{props.note.info.txt}</div>
            </div>
        </div>
    }
}