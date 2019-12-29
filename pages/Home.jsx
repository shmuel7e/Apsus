import booksService from '../services/booksService.js'
import BookList from '../cmps/BookList.jsx'
import BookFilter from '../cmps/BookFilter.jsx'

export default class Home extends React.Component {
    state = {
        books: [],
        filterBy: null
    }

    componentDidMount() {
        this.loadBooks()

    }

    loadBooks = () => {
        booksService.getBooks(this.state.filterBy ).then(books=>{
            this.setState({books})
        })
    }

    onSetFilter = (filterBy) =>{
        this.setState({filterBy} , this.loadBooks);
    }

    render() {
        return (
            <section className="main-container">
                    <BookFilter key="1" onSetFilter={this.onSetFilter} />
                    <BookList key="2" books={this.state.books} />}
            </section>
        )
    }
}