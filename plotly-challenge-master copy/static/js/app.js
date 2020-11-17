// create the function that gets the data and creates the plots for the id 
d3.csv("static/js/female_manager.csv").then((sampleddata)=> {
         console.log(sampleddata)
});

function getPlot(c) {

    // get the data from the csv file
    //d3.csv("static/js/female_manager.csv").then((sampleddata)=> {
    //     console.log(sampleddata)


    let country = sampleddata.map(sampleddata => sampleddata.country);

    console.log(country);
    // country.forEach(function (c) {
    //     console.log(c);
    // });

    var year = sampleddata.year_2019;


    var trace = {
        x: country,
        y: year,
        text: country,
        type: "bar",
        //orientation: "h",
    };

    // create data variable
    var data = [trace];

    // // create layout variable to set plots layout
    var layout = {
        title: "Countries",
        yaxis: {
            tickmode: "linear",
        },
        margin: {
            l: 100,
            r: 100,
            t: 20,
            b: 20
        }
    };

    // create the bar plot
    Plotly.newPlot("bar", data, layout);
}    
//}

function getInfo(country) {
    // reads json file to gather all the necessary data
    d3.csv("static/js/female_manager.csv").then((sampleddata) => {

        // grabs metadata from the metadata variable in the json file
        var metadata = sampleddata.country;

        console.log(metadata)

        // filter meta data info by id
        //var demo = metadata.filter(m => m.country.toString() === country)[0];
        var demo = metadata.filter(sampleddata => sampleddata.country)[0];
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
    getPlot(c);
    getInfo(c);
}



function init() {
    // select dropdown menu 
    var dropdown = d3.select("#selDataset");

    // read the data 
    d3.csv("static/js/female_manager.csv").then((sampleddata) => {
        //     console.log(sampleddata);
        let country = sampleddata.map(sampleddata => sampleddata.country);
        // get the id data to the dropdwown menu
        country.forEach(function (countries) {
            dropdown.append("option").text(countries).property("value");
        });

        // call the functions to display the data and the plots to the page
        getPlot(sampleddata.c);
        getInfo(sampleddata.c[0]);
    });
}

init();
