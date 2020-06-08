import React, { Component } from 'react';
import './BarChart.css';

class BarChart extends Component {

  render() {
    let className = 'BarChart-Bar';

    let barStyle = {
      visibility: 'hidden',
      maxHeight: '0px'
    };

    if (this.props.isVisible) {
      barStyle = {
        visibility: 'visible',
        maxHeight: '100px'
      }
    };

  return (
    <div>
      <div className='testBar' style={barStyle}>
        {this.props.children}
      </div>
      {       
          this.props.chosenCountries.map((info, index) => (
            <div 
              className={className}
              style={barStyle, {height: this.props.info.Percentage - 10 + "%" }}>
              <h3>{this.props.info.Country}, {this.props.info.Year} </h3>
              <h4>{this.props.info.Percentage} %</h4>
              {this.props.children}
            </div>
          ))         
      }
    </div>

      
    );
  }
}

export default BarChart;