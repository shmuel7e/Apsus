import BookApp from './appsus/pages/BookApp.jsx';
import EmailApp from './appsus/pages/EmailApp.jsx'
import NoteApp from './appsus/pages/NoteApp.jsx'
import AppsusHome from './appsus/pages/AppsusHome.jsx'
import AppsusNavBar from './appsus/cmps/AppsusNavBar.jsx'
import aboutPage from './appsus/pages/aboutPage.jsx'
import appsusService from './appsus/services/appsusService.js';
import eventBusService from './services/eventBusService.js'
 

const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
const { createBrowserHistory } = History
const history = createBrowserHistory()

class AppSus extends React.Component {
    state = { bg: '', isScreenVisible:false };

    componentDidMount = () => {
        this.loadBackground();
        eventBusService.on('modalToggled',()=>{
            this.setState(prevState => ({ isScreenVisible: !prevState.isScreenVisible }));
        });
    }

    loadBackground = () => {
        appsusService.getBackground().then(bg => {
            this.setState({ bg }, () => this.changeBg())
        })

    }

    toggleScreen = () => {
        this.setState(prevState => ({ isScreenVisible: !prevState.isScreenVisible }));
        eventBusService.emit('screenClicked');
    }

    changeBg = () => {
        document.body.style.backgroundImage = `url(${this.state.bg})`;
    }

    render() {
        return (
            <main className="home-body">
                <div className={this.state.isScreenVisible?'screen menu-open':'screen'} onClick={this.toggleScreen}></div>  
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