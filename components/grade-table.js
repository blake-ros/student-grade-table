class GradeTable {
  constructor(tableElement, noGradesElement){
  this.tableElement = tableElement;
  this.deleteGrade = null;
  this.noGradesElement = noGradesElement
  }
  updateGrades(grades){
    var tableBody = document.querySelector("tbody");
    while (tableBody.firstChild) {
      tableBody.removeChild(tableBody.firstChild);
    }
    for(var i = 0; i < grades.length; i++){
      var trElement = document.createElement("tr");

      var tdElement = document.createElement("td");
      tdElement.textContent = grades[i].name;
      var td2Element = document.createElement("td");
      td2Element.textContent = grades[i].course;
      var td3Element = document.createElement("td");
      td3Element.textContent = grades[i].grade;

      trElement.append(tdElement);
      trElement.append(td2Element);
      trElement.append(td3Element);
      tableElement.append(trElement);
    }
    console.log(grades)
    this.renderGradeRow(grades, this.deleteGrade);
    var pElement = document.querySelector("p");
    if(!grades){
      pElement.textContent = "There are no grades";
    }
  }
  onDeleteClick(deleteGrade){
    this.deleteGrade = deleteGrade;
  }
  renderGradeRow(data, deleteGrade){
    for(var i = 0; i < data.length; i++){
      var tableRow = document.createElement("tr");

      var tableData = document.createElement("td");
      tableData.textContent = data[i].name;
      var tableData2 = document.createElement("td");
      tableData2.textContent = data[i].course;
      var tableData3 = document.createElement("td");
      tableData3.textContent = data[i].grade;
      var tableData4 = document.createElement("td");
      var button = document.createElement("button");
      button.textContent = "DELETE";
      button.classList.add('btn btn-danger');
      button.setAttribute("type", "submit");
      button.addEventListener("click", function(){
        deleteGrade(data[i].id);
      })
      tableData4.appendChild(button);

      tableRow.append(tableData);
      tableRow.append(tableData2);
      tableRow.append(tableData3);
      tableRow.append(tableData4);
      tableElement.append(tableRow);
    }

  }
}
