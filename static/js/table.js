// var url = "/api"
// var url= "https://data.cityofchicago.org/resource/hec5-y4x5.json?$limit=1000"
// Grab the data with d3
d3.csv("../Data/girls_in_power.csv").then(function(data) {
// d3.json(url).then(function(data) {
  // let data.zipcode = +data.zipcode;
//   console.log(data.country);

// Variables
let button = d3.select("#filter-btn");
let inputField1 = d3.select("#country");
let tbody = d3.select("tbody");
var resetbtn = d3.select("#reset-btn");
// let columns = ["country","code", "new_code", "latitude" ,"longitude", "indicator_name", "year_2009", "year_2010", "year_2011", "year_2012", "year_2013", "year_2014", "year_2015", "year_2016", "year_2017", "year_2018", "year_2019"];
let columns = ["country", "indicator_name", "year_2009", "year_2010", "year_2011", "year_2012", "year_2013", "year_2014", "year_2015", "year_2016", "year_2017", "year_2018", "year_2019"];



let populate = (dataInput) => {

  dataInput.forEach(women => {
    let row = tbody.append("tr");
    columns.forEach(column => row.append("td").text(women[column])
    )
  });
}

//Populate table
populate(data);

// Filter by attribute
button.on("click", () => {
  d3.event.preventDefault();
  let inputData = inputField1.property("value").trim();
  let filterCountry = data.filter(data => data.country === inputData);
  console.log(filterCountry)

  // Add filtered sighting to table
  tbody.html("");

  let response = {filterCountry}

  if (response.filterCountry.length !== 0) {
    populate(filterCountry);
  }
    else {
      tbody.append("tr").append("td").text("No results found!"); 
    }
});

resetbtn.on("click", () => {
    tbody.html("");
    populate(data);
    console.log("Table reset");
  })
});