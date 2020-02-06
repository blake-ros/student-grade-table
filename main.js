
var tableElement = document.querySelector("tbody");

var gradeTable = new GradeTable(tableElement);

var header = document.querySelector("header");

var pageHeader = new PageHeader(header);


var app = new App(gradeTable, pageHeader);
app.start();
