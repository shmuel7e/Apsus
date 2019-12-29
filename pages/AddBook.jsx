import booksService from '../services/booksService.js'
import eventBusService from '../services/eventBusService.js'

export default class AddBook extends React.Component {
    state = {
        books: [],
        filterByname: ''
    }

    componentDidMount() {
        this.loadBooks();
    }

    loadBooks = () => {
        booksService.getGoogleBooks(this.state.filterByname).then(books => {
            this.setState({ books })
        })
    }

    changeInput = (ev) => {
        const field = ev.target.name;
        const value = ev.target.value;
        this.setState({ [field]: value }, this.loadBooks());
    }

    addBook = (googleBook) => {
        booksService.addGoogleBook(googleBook);
        eventBusService.emit('showMsg', { txt: 'Book was successfully saved!', type: 'success', id: googleBook.id });
    }


    render() {
        return <div className="addBooks-container">

            <input className="search-input" type="text" placeholder="Search by book name" value={this.state.filterByname}
                onChange={this.changeInput} name="filterByname">
            </input>

            {this.state.books.map((book, i) => {
                return (<ul key={i}>
                    <li>{book.volumeInfo.title}<span onClick={() => this.addBook(book)}>+</span></li>
                </ul>)
            })}

        </div>

    }
}
