import React from "react";
import "./bootStrapExample.scss";
class BootStrapExample extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-4">
          <div className="card">
          <img
              className="card-img-top"
              src="https://icons-for-free.com/iconfiles/png/512/design+development+facebook+framework+mobile+react+icon-1320165723839064798.png"
              alt="Card image cap"
            ></img>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BootStrapExample;
