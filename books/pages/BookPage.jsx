import booksService from '../../services/booksService.js'
import BookDetails from '../../books/cmps/BookDetails.jsx'
import AddReview from '../../books/cmps/AddReview.jsx'
import ReviewsPreview from '../../books/cmps/ReviewsPreview.jsx'

export default class BookPage extends React.Component {
    state = {
        book: null
    }

    componentDidMount() {
        this.loadBook();
    }

    onAddReview = (review) => {
        booksService.addReview(review, this.state.book.id).then(editBook=> {
            this.setState({ book:editBook })
        })
    }

    loadBook() {
        const { id } = this.props.match.params;
        booksService.getBookById(id).then(book => {
            this.setState({ book })
        })
    }

    goBack = () => {
        this.props.history.push('/booksApp')
    }

    render() {
        if (!this.state.book) return <div>Loading...</div>
        return <div className="book-page-container">
            <BookDetails book={this.state.book} goBack={this.goBack}/>
            <AddReview onSave={this.onAddReview}/>
            <ReviewsPreview reviews={this.state.book.reviews}/>
        </div>

    }
}
