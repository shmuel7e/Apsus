import eventBusService from "../../services/eventBusService.js";
import emailsService from '../services/emailService.js';
export default class ComposeModal extends React.Component {

    eventKiller = null;

    state = {
        display: false,
        email: {
            from: '',
            subject: '',
            body: '',
            isRead: false,
            isStarred: false,
            isSent: true,
            isTrash: false,
            sentAt: Date.now(),
            replys: [],
            id: 31
        }
    }

    componentDidMount() {
        this.eventKiller = eventBusService.on('composeModal', () => {
            this.setState({ display: true })
        });
    }


    componentWillUnmount() {
        this.eventKiller && this.eventKiller();
    }

    closeModal = () => {
        this.setState({ display: false })
    }

    inputChange = (ev) => {
        const name = ev.target.name;
        const value = ev.target.value;
        this.setState(prevState => {
            return { email: { ...prevState.email, [name]: value } }
        });

    }

    onSendEmail = (ev) => {
        ev.preventDefault();
        this.onSetId();
        emailsService.sendEmail(this.state.email);
        this.closeModal();
    }

    onSetId = () => {
        let name = 'id';
        let time = 'sentAt';
        this.setState(prevState => {
            return { email: { ...prevState.email, [name]: emailsService.getRandomId(10000), [time]: Date.now() } }
        });
    }




    render() {
        if (!this.state.display) return null;
        return <form className={'form-container'}>
            <div className={'form-header'}>New Message<span className={'close-btn-compose'} onClick={this.closeModal}> <i className={'fas fa-times'}></i></span></div>
            <input className={'review-input'} type="text" placeholder="Recipients" name="from" onChange={this.inputChange}></input>
            <input type="text" placeholder="Subject" name="subject" onChange={this.inputChange}></input>
            <textarea className={'email-input-txt'} type="text" name="body"
                onChange={this.inputChange}></textarea>
            <button className={'submit-compose'} onClick={this.onSendEmail}>Send</button>
        </form>
    }
}

