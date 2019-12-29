import NoteList from '../../notes/pages/NoteList.jsx'
import NotePage from '../../notes/pages/NotePage.jsx'
import NoteModal from '../../notes/cmps/NoteModal.jsx'

const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
const { createBrowserHistory } = History
const history = createBrowserHistory()

export default class NoteApp extends React.Component {

    render() {
        return (
            <main>
                <Router history={history}>
                    <NoteModal></NoteModal>
                    <Switch>
                        <Route component={NoteList} path="/noteApp" exact />
                        <Route component={NotePage} path="/noteApp/note/:id" exact />
                        {/* <Route component={notFoundPage} path="/noteApp" />  */}
                    </Switch>
                </Router>
            </main>
        )
    }
}