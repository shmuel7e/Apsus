import emailsService from '../services/emailService.js'
import EmailFilter from '../cmps/EmailFilter.jsx'
import EmailPreview from '../cmps/EmailPreview.jsx'
import EmailSideBar from '../cmps/EmailSideBar.jsx'
import eventBusService from '../../services/eventBusService.js';

export default class EmailList extends React.Component {
    state = {
        emails: [],
        filterBy: null
    }

    componentDidMount() {
        this.eventKiller = eventBusService.on('emailAdded', () => {
            this.loadEmails()
        });
        this.loadEmails();
    }

    loadEmails = () => {
        emailsService.getEmails(this.state.filterBy).then(emails => {
            this.setState({ emails })
        })
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, () => this.loadEmails());
    }

    deleteEmail = (email) => {
        emailsService.deleteEmail(email);
        this.loadEmails();
    }

    removeEmail = (email) => {
        emailsService.removeEmail(email);
        this.loadEmails();
    }

    toggleRead = (email) => {
        emailsService.toggleRead(email);
        this.loadEmails();
    }

    toggleUnRead = (email) => {
        emailsService.toggleUnRead(email);
        this.loadEmails();
    }

    toggleStar = (email) => {
        emailsService.toggleStar(email);
        this.loadEmails();
    }

    unToggleTrash = (email) => {
        emailsService.unToggleTrash(email);
        this.loadEmails();
    }

    render() {
        return (
            <section className={'app-body'}>
                <EmailSideBar onSetFilter={this.onSetFilter}></EmailSideBar>
                <EmailFilter className={'email-filter'} key="1" onSetFilter={this.onSetFilter} />
                <ul className={'email-list'}>{this.state.emails.map((email, i) => <EmailPreview key={i} email={email}
                    deleteEmail={email.isTrash ? this.removeEmail : this.deleteEmail}
                    toggleRead={this.toggleRead} toggleUnRead={this.toggleUnRead} toggleStar={this.toggleStar} unToggleTrash={this.unToggleTrash}>
                </EmailPreview>)}</ul>
            </section>
        )
    }
}