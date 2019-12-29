import emailsService from '../services/emailService.js';
import EmailSideBar from '../cmps/EmailSideBar.jsx';
import EmailReply from '../cmps/EmailReply.jsx';
import eventBusService from "../../services/eventBusService.js";

export default class EmailPage extends React.Component {
    state = {
        email: null,
    }

    componentDidMount() {
        this.eventKiller = eventBusService.on('loadEmail', () => {
            this.loadEmail();
        });
        this.loadEmail();
    }



    onSetFilter = (filterBy) => {
        this.props.history.push('/emailApp');
    }

    loadEmail() {
        const { id } = this.props.match.params;
        emailsService.getEmailById(id).then(email => {
            this.setState({ email })
        })
    }

    goBack = () => {
        this.props.history.push('/emailApp');
    }

    onDelete = () => {
        emailsService.deleteEmail(this.state.email);
        this.props.history.push('/emailApp');
        this.setState({ email: null });
    }

    onRemove = () => {
        emailsService.removeEmail(this.state.email);
        this.props.history.push('/emailApp');
        this.setState({ email: null });
    }

    onReply = () => {
        eventBusService.emit('replyModal', this.state.email);
    }

    onToggleMenu = () => {
        document.querySelector('.side-bar').classList.toggle('open');
        document.querySelector('.main-nav2').classList.toggle('menu-open');
    }

    render() {
        if (!this.state.email) return <div>Loading...</div>
        return [
            <EmailSideBar onSetFilter={this.onSetFilter}></EmailSideBar>,
            <nav className={'main-nav2'}>
                <button className={'nav-hamburger second'} onClick={this.onToggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button> </nav>
            , <div className={'email-page-container'}>
                <h1>{this.state.email.from}</h1>
                <h2>{this.state.email.subject}</h2>
                <div className={'emailpage-body-container'}>
                    <div>{this.state.email.body}
                        <ul className={'replys-main-container'}>
                            {this.state.email.replys.map((reply, i) =>
                                <EmailReply className={'reply-email'}
                                    from={this.state.email.from} idx={i} reply={reply}>
                                </EmailReply>
                            )}</ul>
                    </div>
                </div>
                <button className={'go-back-btn-body'} onClick={this.goBack}>Back</button>
                <button className={'delete-btn-body'} onClick={this.state.email.isTrash ? this.onRemove : this.onDelete}>Delete</button>
                <button className={'reply-btn-body'} onClick={this.onReply}>Reply</button>
            </div>
        ]

    }
}
