import React from "react";
import Stars from "react-star-rating-component";
import config from "../app_config.json";

class ParkRating extends React.Component {
  constructor() {
    super();

    this.state = {
      rating: 1
    };
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({ rating: nextValue });
    this.insertRating(this.props.user, this.props.title, nextValue);
  }

  insertRating(user, parkTitle, rating) {
    console.log(
      "user:" + user + ", parkTitle:" + parkTitle + ", rating:" + rating
    );
    fetch(config.lambda_updateParkRatingsUrl, {
      method: "POST",
      body: JSON.stringify({
        user,
        parkTitle,
        rating
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => {
        return response.json();
      })
      .then(json => {
        console.log(json);
      });
  }

  render() {
    const { rating } = this.state;

    return (
      <div>
        <Stars
          name="rate1"
          starCount={5}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
        />
      </div>
    );
  }
}

export default ParkRating;
