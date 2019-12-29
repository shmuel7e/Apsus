const { Link } = ReactRouterDOM

export default class BookPreview extends React.Component {

    setCurrencyIcon = () => {
        switch (this.props.book.listPrice.currencyCode) {

            case 'EUR':
                return <i className="fas fa-euro-sign"></i>
            case 'ILS':
                return <i className="fas fa-shekel-sign"></i>
            case 'USD':
                return <i className="fas fa-dollar-sign"></i>

            default:
                break;
        }
    }


    render() {
        const { props } = this;
        return <Link to={`/booksApp/book/${props.book.id}`} style={{ textDecoration: 'none',color: 'black' }}>
        <li className="book-preview">
            <img className="book-img" src={props.book.thumbnail}/>
            <div className="book-title">{props.book.title}</div>
            <div className="book-price" style={{color: `${props.priceColor}`}}>{props.book.listPrice.amount}{this.setCurrencyIcon()}</div>
        </li>
        </Link>
    }
}