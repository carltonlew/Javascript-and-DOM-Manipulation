// from data.js
var tableData = data;

// YOUR CODE HERE!
var table = d3.select("table");
var filter = d3.select("#filter-btn");

function renderTable(tableEntries){
var tbody = d3.select("tbody");
d3.select("tbody").html("");

// loop through data
for (var i = 0; i<tableEntries.length; i++){
    tr=tbody.append("tr");
    tr.append("td").text(tableEntries[i].datetime);
    tr.append("td").text(tableEntries[i].city);
    tr.append("td").text(tableEntries[i].state);
    tr.append("td").text(tableEntries[i].country);
    tr.append("td").text(tableEntries[i].shape);
    tr.append("td").text(tableEntries[i].durationMinutes);
    tr.append("td").text(tableEntries[i].comments);
};
};

renderTable(tableData);

filter.on("click", function(){
    var filterData=tableData;
    var selectDate = d3.select("#datetime").property("value");
    if (selectDate){
        filterData = tableData.filter(data => data.datetime === selectDate);

        d3.event.preventDefault();
    };
    renderTable(filterData);
});