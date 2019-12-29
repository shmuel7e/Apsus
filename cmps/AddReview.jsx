import ReviewForm from "../cmps/ReviewForm.jsx";

export default class AddReview extends React.Component {

    render() {
        return <ReviewForm onSave={this.props.onSave}></ReviewForm>
    }
} 