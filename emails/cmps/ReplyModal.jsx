import eventBusService from "../../services/eventBusService.js";
import emailsService from '../services/emailService.js';
export default class ReplyModal extends React.Component {

    eventKiller = null;

    state = {
        display: false,
        emailId: '',
        reply: '',
    }

    componentDidMount() {
        this.eventKiller = eventBusService.on('replyModal', (id) => {
            this.setState({ display: true, emailId: id })
        });
    }

    componentWillUnmount() {
        this.eventKiller && this.eventKiller();
    }

    closeModal = () => {
        this.setState({ display: false })
    }

    inputChange = (ev) => {
        const value = ev.target.value;
        this.setState({ reply: value }, function () {
        });

    }

    onReply = (ev) => {
        ev.preventDefault();
        emailsService.replyEmail(this.state.reply, this.state.emailId);
        eventBusService.emit('loadEmail');
        this.closeModal();
    }


    render() {
        if (!this.state.display) return null;
        return <form className={'reply-container'}>
            <div className={'reply-section-container'}><span className={'from-reply'}>From</span><span className={'close-btn-compose'} onClick={this.closeModal}> <i className={'fas fa-times'}></i></span></div>
            <textarea className={'reply-input-txt'} type="text" name="reply"
                onChange={this.inputChange}></textarea>
            <button className={'submit-reply'} onClick={this.onReply}>Reply</button>
        </form >
    }
}

