var stores = [];


function CookieShop(name, min, max, avgCookieCust, totalCookie, hourlyCookie) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avgCookieCust = avgCookieCust;
  this.totalCookie = totalCookie;
  this.hourlyCookie = hourlyCookie;
  stores.push(this);
}
// Ex pikePlace min: 17, max 88, avg:5.2, total:0, hrlycookie: []



var pikePlace = new CookieShop("Pike Place Market", 17, 88, 5.2, 0, []);
var alki = new CookieShop("Alki", 3, 24, 2.6, 0, []);
var bellevueSquare = new CookieShop("Bellevue Square", 20, 48, 3.3, 0, []);
var seaTac = new CookieShop("SeaTac Airport", 6, 44, 1.2, 0, []);
var sLU = new CookieShop("South Lake Union", 4 , 22, 3.5 , 0 , []);

// why was white center taken out? and SLU put in? Also where are the #s,



//An array of hours for your stores

var hours = ["10:00", "11:00", "12:00", "1:00", "2:00", "3:00", "4:00", "5:00"];



CookieShop.prototype.randCustomer = function() {
  //generate a random number based on min and max arguments passed in with this function is called.
  return Math.floor(Math.random() * (this.max-this.min + 1)) + this.min;
  }

CookieShop.prototype.generateHourly = function() {
    //For each index in the hours array:
      for (i = 0; i < hours.length; i++) {
      //generate a random amount of cookies (avg * randomm num)
       var hourlyCookie =  Math.floor(this.avgCookCust * this.randCustomer());
       //push the value to the hourly cookies array
       console.log(hourlyCookie);
       this.hourlyCookie.push(hourlyCookie);
      //Add the value to the daily cookie total
       this.totalCookie += hourlyCookie;
       }
   }


///
CookieShop.prototype.render = function() {
  var x = getElementById("locations");
  var tbl = createElement('table');
  x.appendChild(tbl);
  var row1 = createElement('tr');

  var locations = createElement('th');
  locations.textContent = ("Locations");

  var totals = createElement("th");
  totals.textContent = ("Total Cookies");

  for (i= 0; i <hours.length; i ++) {
    var tbdHour = createElement('th');
    tbdHour.textContent(hours[i]);
  }
}

for (n = 0; n < stores.length; n ++) {
  var trow = createElement('tr');
  var tdata = createElement('td'); // I'm not sure if td would work here.
  tdata.textContent(stores[n]);

  for(a = 0; a < hours.lenth; a++) {
    tData = createElement('tData');
    tData.textContent(hourlyCookie[a]);
  }
}



  // CookieShop.prototype.render = function() {
  //    this.generateHourly();
  //    //create UL Element Uls become tr and li become td
  //    var trEl = document.createElement('tr');
  //    //append textNode to UL element will display of the name of the store
  //    trEl.appendChild(document.createTextNode(this.name + ": "))
  //    //assign the store_data element to a variable;
  //     var locations = document.getElementById("locations");
  //     //document.getElementById("")
  //     //append the Ul element to your html document
  //      locations.appendChild(trEl);
  //
  //    // For each index in the hours array:
  //    for(i=0; i < hours.length; i++ ) {
  //        // Create an LI element
  //    var tdEl = document.createElement('td');
  //
  //       // Assign the content of the hours array and hourly cookies to the LI; '10am: 125'
  //       tdEl.textContent = hours[i] + ": " + this.hourlyCookie[i];
  //       // Append the LI element to the UL element as a Child
  //       trEl.appendChild(tdEl)
  //  }


  //       // Create an td element
  //       var tdElement = document.createElement("td")
   //
  //       // Assign the content of your stores Daily Total to the LI element
  //       tdElement.textContent = "Total: " + this.totalCookie ;
  //        // Append the LI element to the UL as a Child
  //        trEl.appendChild(tdElement)
   //
  //  }




pikePlace.render();
alki.render();
bellevueSquare.render();
seaTac.render();
sLU.render();
