class GradeTable {
  constructor(tableElement){
  this.tableElement = this.tableElement,
  }
  updateGrades(grades){
    for(var i = 0; i < grades.length; i++){
      var tbodyElement = document.body.querySelector("tbody");
      var trElement = document.createElement("tr");
      var tdElement = document.createElement("td");
      trElement.appendChild(tdElement).textContent(grades[i].name);
      trElement.appendChild(tdElement).textContent(grades[i].course);
      trElement.appendChild(tdElement).textContent(grades[i].grade);
      tbodyElement.appendChild(trElement);
    }
    console.log(grades)
  }
}
