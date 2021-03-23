import ReactCardFlip from "react-card-flip";
import React from "react";
import HideCard from "./hideCard";
import ShowCard from "./showCard";
import "../bootstrapComponent/bootstrapExample.scss";

class CardFlip extends React.Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    console.log('test');
    this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <HideCard
          name="This is the front of the card."
          handleClick={this.handleClick}
        ></HideCard>
        <ShowCard name="REACT FLIP CARD." 
          handleClick={this.handleClick}>
        </ShowCard>
      </ReactCardFlip>
    );
  }
}

export default CardFlip;
