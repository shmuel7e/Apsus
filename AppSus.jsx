import BookApp from './appsus/pages/BookApp.jsx';
import EmailApp from './appsus/pages/EmailApp.jsx'
import NoteApp from './appsus/pages/NoteApp.jsx'
import AppsusHome from './appsus/pages/AppsusHome.jsx'
import AppsusNavBar from './appsus/cmps/AppsusNavBar.jsx'
import aboutPage from './appsus/pages/aboutPage.jsx'
import appsusService from '../services/appsusService.js';


const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
const { createBrowserHistory } = History
const history = createBrowserHistory()

class AppSus extends React.Component {
    state = { bg: '' };

    componentDidMount = () => {
        this.loadBackground();
    }

    loadBackground = () => {
        appsusService.getBackground().then(bg => {
            this.setState({ bg }, () => this.changeBg())
        })

    }

    changeBg = () => {
        document.body.style.backgroundImage = `url(${this.state.bg})`;
    }

    render() {
        return (
            <main className="home-body">
                <Router history={history}>
                    <AppsusNavBar></AppsusNavBar>
                    <Switch>
                        <Route component={AppsusHome} path="/" exact />
                        <Route component={BookApp} path="/booksApp"/>
                        <Route component={EmailApp} path="/emailApp"/>
                        <Route component={NoteApp} path="/noteApp"/>
                        <Route component={aboutPage} path="/about" exact />
                    </Switch>
                </Router>
            </main>
        )
    }
}


ReactDOM.render(
    <AppSus/>,
    document.getElementById('root')
)