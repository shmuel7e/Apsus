
export default class NoteVideo extends React.Component {
    state={embedLink:''}

    componentDidMount() {
        this.ConvertLinkToEmbed();
    }

    handleClick = () => {
        this.props.openModal(this.props.note);
    }

    ConvertLinkToEmbed = () => {
        let url = this.props.note.info.url;
        let idx = url.lastIndexOf("=");
        let embedLink = url.substring(idx+1);
        this.setState({ embedLink });
    }

    render() {
        const { props } = this;
        return <div onClick={this.handleClick}>
            <iframe className="note-img" src={`https://www.youtube.com/embed/${this.state.embedLink}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>

            </iframe>
                {/* <img className="note-img" src={props.note.info.url} alt="note video"/> */}
                <div className="preview-title">{props.note.info.title}</div>
                <div className="preview-txt">{props.note.info.txt}</div>
            </div>
    }
}