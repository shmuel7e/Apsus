export default class ReviewForm extends React.Component {
    state = {
        review: {
            name: '',
            rate: 1,
            readAt: '',
            text: ''
        }
    }

    onSave = (ev) => {
        ev.preventDefault();
        this.props.onSave(this.state.review)
        this.setState({ name: '', rate: 1, readAt: '', text: '' })
    }
    inputChange = (ev) => {
        ev.persist()
        let fieldName = ev.target.name;
        this.setState(prevState => ({ review: { ...prevState.review, [fieldName]: ev.target.value } }))
    }

    render() {
        return <form className='review-form'>
            <label>Your name:</label>
            <input type="text" value={this.state.review.name} onChange={this.inputChange} placeholder="Enter your name" name="name" />
            <label>Rate (1-5):</label>
            <input type="number" value={this.state.review.rate} onChange={this.inputChange} name='rate' min="0" max="5"></input>
            <label>Read at:</label>
            <input type="date" value={this.state.review.readAt} onChange={this.inputChange} name="readAt" />
            <textarea name="text" value={this.state.review.text} onChange={this.inputChange} placeholder='Enter review' cols="30" rows="10"></textarea>
            <button onClick={this.onSave}>Submit</button>
        </form>
    }
}