  toggleCountry = (indexOfCountry) => {
    const chosenCountries = this.state.chosenCountries.slice(); // duplicate chosenCountries array

    // Check if the chosenCountries array is listing this country as chosen
    if (chosenCountries.includes(indexOfCountry)) {
        // Presently chosen, remove from array
        // (This is the way you remove a particular value from an array in
        // JavaScript, sadly there is no "remove" method.)
        chosenCountries.splice(chosenCountries.indexOf(indexOfCountry), 1);

    } else {
        // Not presently chosen, add to array
        chosenCountries.push(chosenCountries);
    }

    // Finally, set the state with the new chosenCountries
    this.setState({
        chosenCountries: chosenCountries,
        isVisible: !this.state.isVisible
    });
    console.log('Array Chosen Countries: ', this.state.chosenCountries)
    console.log('Index of Country: ',  indexOfCountry)
    
    // Object.entries(this.state.data).map(([year, info]) => {
    //   console.log(year, info)
    // }
    // )
}

 toggleCountry = (data, info, index) => {   
    const chosenCountries = this.state.chosenCountries  
    const chosenCountry = data.Country;
    chosenCountries.push(chosenCountry);

    console.log('Country Toggled: ', chosenCountry)
    console.log('Chosen Countries: ', chosenCountries)
    
    
    this.setState({
      isVisible: !this.state.isVisible,
      // data: this.state.data,
      chosenCountries: this.state.chosenCountries
    }, () => {console.log(chosenCountry,': ', this.state.isVisible)});

  };




  try messing with filter 
  get one entry from the list and use js function in the console.
  look into only returning the data for one year initially
  data["2010"].filter(name => name.Country === "Bolivia")[0]
