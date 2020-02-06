var table = $("#table");
var tableElement = document.body.querySelector("tbody");

var gradeTable = new GradeTable(tableElement);
gradeTable.GradeTable(table);

var app = new App();
app.start();
