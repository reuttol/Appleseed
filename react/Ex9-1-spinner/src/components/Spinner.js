import React from "react";
import './spinner.css';

class Spinner extends React.Component {
  
  render() {
    return (
      <div>
        <div className={`spinner-container ${this.props.hide}`}>
        <div className="spinner">
          <div className="circle" id="circle-1"></div>
          <div className="circle" id="circle-2"></div>
          <div className="circle" id="circle-3"></div>
          <div className="circle" id="circle-4"></div>
        </div>
      </div>
      </div>
    );
  }
}

export default Spinner;