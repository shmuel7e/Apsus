import BookPreview from "../cmps/BookPreview.jsx";

export default class PetDetails extends React.Component {
    state = { priceColor: '', pageCountTxt: '', publishedDateTxt: '',isForSale:false }

    componentDidMount() {
        this.setPriceColor();
        this.setPageCountTxt();
        this.setPublishedDateTxt();
        this.checkIfForSale();
    }

    setPriceColor = () => {
        let bookPrice = this.props.book.listPrice.amount;

        if (bookPrice < 50) {
            this.setState({ priceColor: 'green' })
        } else if (bookPrice > 150) {
            this.setState({ priceColor: 'red' })
        }
    }

    setPageCountTxt = () => {
        let pageCount = this.props.book.pageCount;

        if (pageCount > 500) {
            this.setState({ pageCountTxt: 'Long reading' })
        } else if (pageCount > 500) {
            this.setState({ pageCountTxt: 'Decent Reading' })
        } else {
            this.setState({ pageCountTxt: 'Light Reading' })
        }
    }

    setPublishedDateTxt = () => {
        let publishedDate = this.props.book.publishedDate;
        let currYear = new Date().getFullYear();
        if ((currYear - publishedDate) > 10) {
            this.setState({ publishedDateTxt: 'Veteran Book' })
        } else if((currYear - publishedDate) <= 5){
            this.setState({ publishedDateTxt: 'New!' })
        } else {
            this.setState({ publishedDateTxt: 'Not too Old...' })
        }
    }

    checkIfForSale = () => {
        if(this.props.book.listPrice.isOnSale) {
            this.setState({ isForSale: true })
        }
    }

    render() {
        const { props } = this;
        return <div className="book-details-container">
            {this.state.isForSale ? <img src="./img/for-sale-sign.gif" alt="for sale image" height="65"/>:''}
            <BookPreview book={props.book} priceColor={this.state.priceColor}></BookPreview>
            <h3>{this.state.pageCountTxt}</h3>
            <p>Number of pages: {props.book.pageCount}</p>
            <h3>{this.state.publishedDateTxt}</h3>
            <p>Published Date: {props.book.publishedDate}</p>
            <button onClick={props.goBack}>BACK</button>
        </div>

    }
}