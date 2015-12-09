var hours = [
  "Total",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm"
];


function CookieShop(locationName, minCust, maxCust, avgCust) {
  this.locationName = locationName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCust = avgCust;
  this.hourlyCookies = [];
  this.dailyCookies = 0;
}
// Ex pikePlace min: 17, max 88, avg:5.2, total:0, hrlycookie: []
// trish you can add at the top of this in your CookieShop constructor. since its not being passed in and changed. It can be hard coded.  hourlyCookie = 0;
//this.hourlyCookie = [];
//this.dailyCookie = 0;


CookieShop.prototype.randCustomer = function (min, max) {
  //generate a random number based on min and max arguments passed in
  return Math.floor(Math.random() *(max - min + 1)) + min;

}


CookieShop.prototype.generateHourly = function() {
    //For each index in the hours array:
  for ( var i = 0; i < hours.length; i++) {
   cookiesThisHour = this.randCustomer(this.minCust, this.maxCust)
   this.avgCookies;
   this.hourlyCookies.push(cookiesThisHour);
   this.dailyCookies += cookiesThisHour;
   }
}

CookieShop.prototype.render = function() {
  this.generateHourly();
    var hoursElem = document.getElementById("hours");  // ref html
    var tblElem = document.createElement("table");
    var table = document.getElementsByTagName("table");
    var tdElem = document.createElement("td");
    tdElem.textContent = this.locationName;
    tblElem.appendChild(tdElem);
    tdElem.className = "firstRow";

    var totElem = document.createElement('td');
    totElem.textContent = Math.round(this.dailyCookies);
    tblElem.appendChild(totElem);
    hoursElem.appendChild(tblElem);

    for (var i = 0; i < this.hourlyCookies.length; i++) {
      var thElem = document.createElement('td');
      thElem.textContent = Math.round(this.hourlyCookies[i]);
      tblElem.appendChild(thElem);
    }
  }
// create consturctor to add shop and properties.
var pikePlace = new CookieShop("Pike Place", 17, 88, 5.2);
var alki = new CookieShop("Alki", 3, 24, 2.6);
var bellevueSquare = new CookieShop("Bellevue Square", 20, 48, 3.3);
var seaTac = new CookieShop("SeaTac Airport", 6, 44, 1.2);
var southCenterMall = new CookieShop("South Center Mall", 3 , 24, 2.6);

///

function firstLine() {
  var hoursElem = document.getElementById("hours");
  var firstRow = document.createElement("tr");
  var tblElem = document.createElement("table");
  var thElem = document.createElement("th");
  thElem.textContent = "Locations";
  firstRow.appendChild(thElem);
  hoursElem.appendChild(tblElem);

  for(var i = 0; i < hours.length; i ++) {
    var thElem = document.createElement("th")
    thElem.textContent = hours[i];
    tblElem.appendChild(thElem);
    firstRow.appendChild(thElem);
    tblElem.appendChild(firstRow);
  }
}


firstLine();
pikePlace.render();
seaTac.render();
southCenterMall.render();
bellevueSquare.render();
alki.render();
