
export default class NoteText extends React.Component {

    handleClick = () => {
        this.props.openModal(this.props.note);
    }

    render() {
        const { props } = this;
        return <div onClick={this.handleClick}>
                <div className="preview-title">{props.note.info.title}</div>
                <div className="preview-txt">{props.note.info.txt}</div>
            </div>
    }
}