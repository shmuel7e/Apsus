import BookPreview from "../cmps/BookPreview.jsx"

export default function BookList(props) {
    return <ul className="books-container">{props.books.map((book , i)=><BookPreview key={i} book={book}></BookPreview>)}</ul>
}