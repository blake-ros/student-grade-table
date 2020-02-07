
var tableElement = document.querySelector("tbody");

var gradeTable = new GradeTable(tableElement);

var header = document.querySelector("header");

var pageHeader = new PageHeader(header);

var gradeForm = document.querySelector("form")

var gradeFormClass = new GradeForm(gradeForm)


var app = new App(gradeTable, pageHeader, gradeFormClass);
app.start();
