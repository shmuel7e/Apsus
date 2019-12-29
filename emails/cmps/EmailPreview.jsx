const { Link } = ReactRouterDOM


export default class EmailPreview extends React.Component {

    constructor() {
        super();
        this.state = {
            isHovered: false
        };
        this.handleHover = this.handleHover.bind(this);
    }
    handleHover() {
        this.setState(prevState => ({
            isHovered: !prevState.isHovered
        }));
    }
    onDeleteEmail = () => {
        this.props.deleteEmail(this.props.email);
    }

    onToggleRead = () => {
        this.props.toggleRead(this.props.email);
    }

    onToggleUnRead = () => {
        this.props.toggleUnRead(this.props.email);
    }

    onSetDateFormat = () => {
        if (Date.now() - this.props.email.sentAt <= 60000) return 'minute ago';
        if (Date.now() - this.props.email.sentAt <= 3600000) return 'hour ago';
        if (Date.now() - this.props.email.sentAt <= 86400000) return new Date(this.props.email.sentAt).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
        else return new Date(this.props.email.sentAt).toLocaleDateString('en-US');
    }

    onToggleStar = () => {
        this.props.toggleStar(this.props.email);
    }

    onReturnInbox = () => {
        this.props.unToggleTrash(this.props.email);
    }


    render() {
        const backInboxBtn = (this.state.isHovered && this.props.email.isTrash) ? "back-inbox-btn" : "back-inbox-btn hidden";
        const btnClass = this.state.isHovered ? "delete-button-preview" : "delete-button-preview hidden";
        const btnOpenClass = this.state.isHovered ? "open-button-preview" : "open-button-preview hidden";
        const btnReadClass = this.state.isHovered ? "mark-read-button" : "mark-read-button hidden";
        const { props } = this;
        return <div onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
            <div className={'preview-container'}><Link onClick={this.onToggleRead} to={`/emailApp/email/${props.email.id}`}>
                <div className={props.email.isRead ? 'email-preview-container unbold' : 'email-preview-container bold'}>
                    <li className={'email-preview'}>
                        <span className={'from-preview'}> {props.email.from}</span>
                        <span className={'subject-preview'}>
                            <span className={'subject-only'}> {props.email.subject} </span>
                            <span className={'preview-body'}> {props.email.body} </span>
                        </span>
                    </li>
                    <span className={this.state.isHovered ? 'preview-date hidden' : 'preview-date'}>{this.onSetDateFormat()}</span>
                </div >
            </Link >
                <span onClick={this.onToggleStar} data-toggle={'tooltip'} title={props.email.isStarred ? 'Starred' : 'Not starred'} className={props.email.isStarred ? 'starred' : 'not-starred'}><i className={props.email.isStarred ? 'fas fa-star' : 'far fa-star'}></i></span>
                <span className={btnClass} key="9" data-toggle={'tooltip'} title={'Delete'} onClick={this.onDeleteEmail}><i className={'fas fa-trash'}></i> </span>
                <Link to={`/emailApp/email/${props.email.id}`}>  <span className={btnOpenClass} key="90" data-toggle={'tooltip'} title={'Open'}><i className={'fas fa-expand'}></i> </span></Link>
                <span className={btnReadClass} key="2" onClick={this.onToggleUnRead} data-toggle={'tooltip'} title={props.email.isRead ? 'Mark as unread' : 'Mark as read'}>
                    <i className={props.email.isRead ? 'fas fa-envelope' : 'fas fa-envelope-open'}></i></span>
                <span className={backInboxBtn} key="19" data-toggle={'tooltip'} title={'Return to inbox'} onClick={this.onReturnInbox}><i className={'fas fa-chevron-left'}></i> </span>
            </div>
        </div >
    }
}


