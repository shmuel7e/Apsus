import EmailList from '../../emails/pages/EmailList.jsx'
import EmailPage from '../../emails/pages/EmailPage.jsx'
import ComposeModal from '../../emails/cmps/ComposeModal.jsx'
import ReplyModal from '../../emails/cmps/ReplyModal.jsx'


const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
const { createBrowserHistory } = History
const history = createBrowserHistory()

export default class EmailApp extends React.Component {

    render() {
        return (
            <main className="email-body">
                <Router history={history}>
                    <ComposeModal></ComposeModal>
                    <ReplyModal></ReplyModal>
                    <Switch>
                        <Route component={EmailList} path="/emailApp" exact />
                        <Route component={EmailPage} path="/emailApp/email/:id" exact />
                    </Switch>
                </Router>
            </main>
        )
    }
}