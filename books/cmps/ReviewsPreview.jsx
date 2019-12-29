export default function ReviewsPreview(props) {

    if (!props.reviews) return 'No reviews to show';
    return <div className="reviews-container">
        {props.reviews.map((review,i) => {
            return (<ul key={i}>
                <li>Name: {review.name}</li>
                <li>Rate: {review.rate}</li>
                <li>Read at: {review.readAt}</li>
                <li>Review: {review.text}</li>
            </ul>
            )
        })}

    </div>

}