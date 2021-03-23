import React from "react";
class ShowCard extends React.Component {
  render() {
    return (
      <div className="row" onClick={this.props.handleClick}>
        <div className="col-4">
          <div className="card">
            <img
              className="card-img-top"
              src="https://icons-for-free.com/iconfiles/png/512/design+development+facebook+framework+mobile+react+icon-1320165723839064798.png"
              alt="Card image cap"
            ></img>
            <div className="card-body">
              <h5 className="card-title">{this.props.name}</h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowCard;
