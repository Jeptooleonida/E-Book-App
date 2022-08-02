import React, {useState} from 'react';
import "../Styles/Review.css";

export default function Post(){
    const[review, setReview] = useState("")
    const [submittedReview, setSubmittedReview] = useState([]);

    function handleReview(event){
          setReview(event.target.value)
    }

    function handleSubmit(event){
         event.preventDefault()
         const ReviewData = { review: review };
         const postArray = [...submittedReview, ReviewData];
         setSubmittedReview(postArray);
         setReview("");

    }

    const submittedData = submittedReview.map((data, index) => {
        return (
          <div key={index}>
            {data.review}
          </div>
        );
      });

    return(
        <div className="review-container">
            <center>
                <h3>Leave a review/Comment</h3>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Comments here' onChange={handleReview} value={review}/>
                    <button type="submit">Submit</button>
                </form>
                <h3> The reviews are : </h3>
                   <ul>
                        <li> {submittedData}</li>
                   </ul>
            </ center>
        </div>
    )
}