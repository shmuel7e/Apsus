import eventBusService from "../services/eventBusService.js";
const { Link } = ReactRouterDOM;

export default class UserMsg extends React.Component {
    eventKiller = null;

    state = { display: false, txt: null, type: null, id: null }

    componentDidMount() {
        this.eventKiller = eventBusService.on('showMsg', (msgDetails) => {
            this.setState({ display: true, txt: msgDetails.txt, type: msgDetails.type, id:msgDetails.id }, () => {
                setTimeout(() => this.setState({ display: false }), 3000);
            });
        });
    }


    componentWillUnmount() {
        this.eventKiller && this.eventKiller();
    }

    render() {
        if (!this.state.display) return null;
        return <div className="user-msg-container"  >
            {this.state.txt} - {this.state.type}
            <Link to={`/book/${this.state.id}`}>Check it out!</Link>
        </div >
    }
} 