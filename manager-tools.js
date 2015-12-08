// An array of hours for your stores

var hours = ["10:00", "11:00", "12:00", "1:00", "2:00", "3:00", "4:00", "5:00"];

//object Literal for each store

var pikePlace = {
  //all the properties of your object
  name: "Pike Place Market",
  min: 17,
  max: 88,
  avgCookCust: 5.2,
  totalCookie: 0,
  cookiesHour: [],
  randCustomer: function() {
    //generate a random number based on min and max arguments passed in with this function is called.
    return Math.floor(Math.random() * (this.max-this.min + 1)) + this.min;
  },

  generateHourly: function() {
    //For each index in the hours array:
      for (i = 0; i < hours.length; i++) {
      //generate a random amount of cookies (avg * randomm num)
       var hourlyCookie =  Math.floor(this.avgCookCust * this.randCustomer());
      //push the value to the hourly cookies array
      console.log(hourlyCookie);
      this.cookiesHour.push(hourlyCookie);
      //Add the value to the daily cookie total
      this.totalCookie += hourlyCookie;
      }
  },

  render: function() {
    this.generateHourly();
    //create UL Element
    var ulEl = document.createElement('ul');
    //append textNode to UL element will display of the name of the store
    ulEl.appendChild(document.createTextNode(this.name + ": "));
    //assign the store_data element to a variable;
     var locations = document.getElementById("locations");
     //document.getElementById("")
    //append the Ul element to your html document
      locations.appendChild(ulEl);

    // For each index in the hours array:
    for(i=0; i < hours.length; i++ ) {
        // Create an LI element
      var liEl = document.createElement('li');

       // Assign the content of the hours array and hourly cookies to the LI; '10am: 125'
       liEl.textContent = hours[i] + ": " + this.cookiesHour[i];
       // Append the LI element to the UL element as a Child
       ulEl.appendChild(liEl)
  }


       // Create an LI element
       var liElement = document.createElement("li")

       // Assign the content of your stores Daily Total to the LI element
       liElement.textContent = "Total: " + this.totalCookie ;
        // Append the LI element to the UL as a Child
        ulEl.appendChild(liElement)

  }

}

var seatacAirport = {
  //all the properties of your object
  name: "SeaTac Airport",
  min: 6,
  max: 44,
  avgCookCust: 1.2,
  totalCookie: 0,
  cookiesHour: [],
  randCustomer: function() {
    //generate a random number based on min and max arguments passed in with this function is called.
    return Math.floor(Math.random() * (this.max-this.min + 1)) + this.min;
  },

  generateHourly: function() {
    //For each index in the hours array:
      for (i = 0; i < hours.length; i++) {
      //generate a random amount of cookies (avg * randomm num)
       var hourlyCookie =  Math.floor(this.avgCookCust * this.randCustomer());
      //push the value to the hourly cookies array
      console.log(hourlyCookie);
      this.cookiesHour.push(hourlyCookie);
      //Add the value to the daily cookie total
      this.totalCookie += hourlyCookie;
      }
  },

  render: function() {
    this.generateHourly();
    //create UL Element
    var ulEl = document.createElement('ul');
    //append textNode to UL element will display of the name of the store
    ulEl.appendChild(document.createTextNode(this.name + ": "))
    //assign the store_data element to a variable;
     var locations = document.getElementById("locations");
     //document.getElementById("")
    //append the Ul element to your html document
      locations.appendChild(ulEl);

    // For each index in the hours array:
    for(i=0; i < hours.length; i++ ) {
        // Create an LI element
      var liEl = document.createElement('li');

       // Assign the content of the hours array and hourly cookies to the LI; '10am: 125'
       liEl.textContent = hours[i] + ": " + this.cookiesHour[i];
       // Append the LI element to the UL element as a Child
       ulEl.appendChild(liEl)
  }


       // Create an LI element
       var liElement = document.createElement("li")

       // Assign the content of your stores Daily Total to the LI element
       liElement.textContent = "Total: " + this.totalCookie ;
        // Append the LI element to the UL as a Child
        ulEl.appendChild(liElement)

  }

}
pikePlace.render();
seatacAirport.render();
