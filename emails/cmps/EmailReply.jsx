
export default class EmailReply extends React.Component {


    render() {
        return <li key={this.props.idx}>
            <h4 >{this.props.from}</h4>
            <p className={'reply-container-now'}>{this.props.reply}</p>
        </li>
    }
}