const { Link } = ReactRouterDOM
export default class BookFilter extends React.Component {
    state = {
        filterBy: {
            name: '',
            price: 200
        }
    }
    changeInput = (ev) => {
        const field = ev.target.name;
        const value = (ev.target.type === 'number') ? +ev.target.value : ev.target.value;
        this.setState(prevState => ({ filterBy: { ...prevState.filterBy, [field]: value } }), function () {
            this.onFilterClick();
        })

    }

    onFilterClick = () => {
        this.props.onSetFilter(this.state.filterBy)
    }

    render() {
        return <div className="books-search-bar">
            <div className="add-book-btn"><Link to='/booksApp/add-book'>Add book</Link></div>
            <input className="books-search-input" type="text" placeholder="Search by name" value={this.state.filterBy.name}
                onChange={this.changeInput} name="name"></input>

            <input className="books-price-input" type="range"
                value={this.state.filterBy.price} name="price"
                onChange={this.changeInput} min="1" max="200"></input>
        </div>
    }
}
