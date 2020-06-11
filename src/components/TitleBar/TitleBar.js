import React, { Component } from 'react';
import './TitleBar.css';

import SelectYear from '../SelectYear/SelectYear';

class TitleBar extends Component {
    onUpdateYear = (ev, data) => {
        let year = ev.target.value;
        this.setState({
          year: year,
          data: data[this.state.year]
        });
        
        console.log('Data for :', year, data)
    
      }
 render() { 
    return (      

        <div className="test">
          <h1>Percentage of Forest Land in <br></br>South American Countries:  
            <SelectYear
                onChange={this.props.onChange}
                currentYear={this.props.year}
                value={this.props.year}>
            </SelectYear>
            {this.props.children}
          </h1>
        </div>        
    );
  }
}
export default TitleBar;