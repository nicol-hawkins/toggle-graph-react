import React, { Component } from 'react';
import './Bar.css';

import Button from '../Button/Button.js';

class Bar extends Component {

  getUnicodeArrow = () => {
    if (this.props.show) {
      return " ↑";
    } else {
      return " ↓";
    }
  }

  onButtonClick = () => {
    if (this.props.show) {
      this.props.onHide();
    } else {
      this.props.onShow();
    }
  }

  render() {
    let barStyle = {
      visibility: 'hidden',
      maxHeight: '0px',
    };

    if (this.props.show) {
      barStyle = {
        visibility: 'visible',
        maxHeight: '1000px',
      };
    }

    return (
      <div className="Bar">
        <Button
          gotClicked={this.onButtonClick}
          buttonText={this.props.text + this.getUnicodeArrow()}
          />
        <div style={barStyle} className="Bar-box">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Bar;