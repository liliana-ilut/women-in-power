// create the function that gets the data and creates the plots for the id 
// d3.csv("static/js/female_manager.csv").then((sampleddata)=> {
//          console.log(sampleddata)
// });

function getPlot(c) {

    // get the data from the csv file
    d3.csv("../Data/parliament_seats.csv").then((sampleddata)=> {
         console.log(sampleddata)

    let selected = c;
    //let country = sampleddata.map(sampleddata => sampleddata.country);

    //console.log(country);
    // country.forEach(function (c) {
    //     console.log(c);
    // });
    for (row of sampleddata) {
        if (row.country === selected)   
        {
            var result_2019 = row.year_2019
            var result_2018 = row.year_2018
            var result_2017 = row.year_2017
            var result_2016 = row.year_2016
            var result_2015 = row.year_2015
            var result_2014 = row.year_2014
            var result_2013 = row.year_2013
            var result_2012 = row.year_2012
            var result_2011 = row.year_2011
            var result_2010 = row.year_2010
            var result_2009 = row.year_2009
        }   
        

    }
    //console.log(result)  
    //let year = sampleddata.map(sampleddata => sampleddata.year_2019);
    //var year = sampleddata.year_2019;
    //console.log(year);


    var trace = {
        x: ["2009", "2010","2011","2012", "2013","2014", "2015","2016", "2017","2018", "2019"],
        y: [result_2009,result_2010, result_2011, result_2012, result_2013,result_2014, result_2015,result_2016, result_2017,result_2018, result_2019],
        text: selected,
        type: "bar"
    };

    // create data variable
    var data = [trace];

    // // create layout variable to set plots layout
    var layout = {
          autosize: false,
		  width: 750,
		  height: 750,
		  margin: {
			l: 60,
			r: 30,
			b: 60,
			t: 30,
			pad: 3
		  },
        title: c, 
            
            
        xaxis: { 
                title: "Year",
                titlefont: {
                    "size": 26},
                },
        yaxis: {
            title: "Women in Parliament (%)",
            titlefont: {
                "size": 26},
           
        },
        colorway : ['#F3CEC9', '#E7A4B6', '#CD7EAF', '#A262A9', '#6F4D96', '#3D3B72', '#182844']
    };


    Plotly.newPlot("bar", data, layout);
});    
}

function getInfo(c) {
    
    d3.csv("../Data/parliament_seats.csv").then((sampleddata) => {
        

        // grabs metadata from the metadata variable in the json file
        //var metadata = sampleddata.country;
        let country = sampleddata.map(sampleddata => sampleddata.country);

        console.log(country);

        var demo = country.filter( i=>i == c);
        //console.log('demo: ${democountry[0].country}');

        //sampleddata =>  sampleddata.country

        // select demographic panel to put data
        var metaInfo = d3.select("#sample-metadata");

        // empty the demographic info panel each time before getting new id info
        metaInfo.html("");

        // grab the necessary demographic data and append the info to the panel
        Object.entries(demo).forEach((key) => {
            metaInfo.append("h5").text(key[0].toUpperCase() + ": " + key[1] + "\n");
        });
    });
}

// this function will gather all the changed information if you go to a different country
// obtains country data from the plot and info functions
function optionEvent(c) {
    console.log(c);
    var dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a variable
    var dataset = dropdownMenu.property("value");
    console.log(dataset);
    
    getPlot(dataset);
    //getInfo(dataset);
    
}



function init() {
    // select dropdown menu 
    var dropdown = d3.select("#selDataset");

    // read the data 
    d3.csv("../Data/parliament_seats.csv").then((sampleddata) => {
        //     console.log(sampleddata);
        let country = sampleddata.map(sampleddata => sampleddata.country);
        // get the id data to the dropdwown menu
        country.forEach(function (countries) {
            dropdown.append("option").text(countries).property("value");
        });

        // call the functions to display the data and the plots to the page
        getPlot(sampleddata.c);
        //getInfo(sampleddata.c);
    });
}

init();
