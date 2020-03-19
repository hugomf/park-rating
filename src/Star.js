import React from "react";
import StarRating from "react-star-rating";

class Star extends React.Component {
  render() {
    return (
      <form action="/api" method="POST">
        <StarRating
          name="airbnb-rating"
          caption="Rate your stay!"
          totalStars={5}
        />
        <button type="submit" className="btn btn-submit">
          Submit Rating
        </button>
      </form>
    );
  }
}

/**   React.render(<Star />, document.getElementById("star-rating")); */
export default Star;
