
var tableElement = document.querySelector("tbody");

var hiddenElement = document.querySelector("p");

var gradeTable = new GradeTable(tableElement, hiddenElement);

var header = document.querySelector("header");

var pageHeader = new PageHeader(header);

var gradeForm = document.querySelector("form")

var gradeFormClass = new GradeForm(gradeForm)




var app = new App(gradeTable, pageHeader, gradeFormClass);
app.start();
