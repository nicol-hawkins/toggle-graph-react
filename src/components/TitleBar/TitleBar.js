import React, { Component } from 'react';
import './TitleBar.css';

import SelectYear from '../SelectYear/SelectYear';

class TitleBar extends Component {
  
 render() { 
    return (      
        <div className="test">
          <h1>Percentage of Forest Land in <br></br>South American Countries:  
            <SelectYear
                onChange={this.props.onChange}
                value={this.props.year}>
            </SelectYear>
            {/* {this.props.children} */}
          </h1>
        </div>        
    );
  }
}
export default TitleBar;