class GradeTable {
  constructor(tableElement, noGradesElement){
  this.tableElement = tableElement;
  this.deleteGrade = null;
  this.noGradesElement = noGradesElement;
  this.renderGradeRow = this.renderGradeRow.bind(this);
  }
  updateGrades(grades){
    var tableBody = document.querySelector("tbody");
    while (tableBody.firstChild) {
      tableBody.removeChild(tableBody.firstChild);
    }

    for(var i = 0; i < grades.length; i++){
      var renderGrade = this.renderGradeRow(grades[i], this.deleteGrade);

      // tableBody.append(renderGrade);
    }

    console.log(grades)
    // this.renderGradeRow(grades, this.deleteGrade);
    var pElement = document.querySelector("p");
    if(!grades){
      pElement.textContent = "There are no grades";
    }
  }
  onDeleteClick(deleteGrade){
    this.deleteGrade = deleteGrade;
  }
  renderGradeRow(data, deleteGrade){
      var tableBody = document.querySelector("tbody");
      var tableRow = document.createElement("tr");

      var tableData = document.createElement("td");
      tableData.textContent = data.name;
      var tableData2 = document.createElement("td");
      tableData2.textContent = data.course;
      var tableData3 = document.createElement("td");
      tableData3.textContent = data.grade;
      var tableData4 = document.createElement("td");
      // tableData4.textContent = data.id;
      var button = document.createElement("button");
      button.textContent = "DELETE";
      button.classList.add('btn');
      button.classList.add('btn-danger');
      button.setAttribute("type", "submit");
      button.addEventListener("click", function () {
          deleteGrade(data.id);
        })
      tableData4.appendChild(button);

      tableRow.append(tableData);
      tableRow.append(tableData2);
      tableRow.append(tableData3);
      tableRow.append(tableData4);

      tableBody.append(tableRow);
    }

  }
// }
