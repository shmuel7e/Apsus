
export default class NoteImg extends React.Component {

    handleClick = () => {
        this.props.openModal(this.props.note);
    }

    render() {
        const { props } = this;
        return <div onClick={this.handleClick}>
                <img className="note-img" src={props.note.info.url} alt="note image"/>
                <div className="preview-title">{props.note.info.title}</div>
                <div className="preview-txt">{props.note.info.txt}</div>
            </div>
    }
}