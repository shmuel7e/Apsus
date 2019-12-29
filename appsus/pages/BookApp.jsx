import Home from "../../books/pages/Home.jsx"
import BookPage from '../../books/pages/BookPage.jsx'
import NavBar from '../../books/cmps/NavBar.jsx'
import AddBook from '../../books/pages/AddBook.jsx'
import notFoundPage from '../../books/pages/notFoundPage.jsx'
import UserMsg from '../../books/cmps/UserMsg.jsx'

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