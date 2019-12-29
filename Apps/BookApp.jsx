import Home from '../pages/Home.jsx'
import BookPage from '../pages/BookPage.jsx'
import NavBar from '../cmps/NavBar.jsx'
import AddBook from '../pages/AddBook.jsx'
import notFoundPage from '../pages/notFoundPage.jsx'
import UserMsg from '../cmps/UserMsg.jsx'

const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
const { createBrowserHistory } = History
const history = createBrowserHistory()

export default class BookApp extends React.Component {

    render() {
        return (
            <main>
                <Router history={history}>
                    <UserMsg></UserMsg>
                    <NavBar></NavBar>
                    <Switch>
                        <Route component={Home} path="/booksApp" exact />
                        <Route component={BookPage} path="/booksApp/book/:id" exact />
                        <Route component={AddBook} path="/booksApp/add-book" exact />
                        <Route component={notFoundPage} path="/booksApp" />
                    </Switch>
                </Router>
            </main>
        )
    }
}