import React, { Component } from 'react';
import './CountryButton.css';

class CountryButton extends Component {

  onButtonClick = () => {
    if(this.props.isVisible) {
      this.props.onHide();
    } else {
      this.props.onShow();
    }
  }
  render() {
    let className = 'Country-Button';

   
    return (
    
        <div 
          className={className} 
          onClick={this.onButtonClick}
          >
            {this.props.children}
        </div>
    
        );
      }
    }

export default CountryButton;