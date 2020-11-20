
// Grab the data with d3
d3.csv("../Data/logistic_regression_predictions.csv").then(function(data) {
    
    
    // Variables
    let button = d3.select("#filter-btn");
    let inputField1 = d3.select("#country");
    let tbody = d3.select("tbody");
    var resetbtn = d3.select("#reset-btn");
    let columns = ["Prediction","Actual", "Correct"];
    
    
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
      let filterCountry = data.filter(data => data.Correct === inputData);
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