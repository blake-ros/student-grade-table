class GradeTable {
  constructor(tableElement, noGradesElement){
  this.tableElement = tableElement;
  this.deleteGrade = null;
  this.noGradesElement = noGradesElement;
  this.renderGradeRow = this.renderGradeRow.bind(this);
  this.editGrade = null;
  }
  updateGrades(grades){
    var tableBody = document.querySelector("tbody");
    while (tableBody.firstChild) {
      tableBody.removeChild(tableBody.firstChild);
    }

    for(var i = 0; i < grades.length; i++){
      this.renderGradeRow(grades[i], this.deleteGrade, this.editGrade);
    }
    var pElement = document.querySelector("p");
    if(grades.length === 0){
      pElement.classList.remove("d-none");
    } else {
      pElement.classList.add("d-none");
    }
  }
  onDeleteClick(deleteGrade){
    this.deleteGrade = deleteGrade;
  }
  onUpdateClick(editGrade){
    this.editGrade = editGrade;
  }
  renderGradeRow(data, deleteGrade, editGrade){
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
      var button2 = document.createElement("button");
      var iconDelete = document.createElement("i");
      var iconEdit = document.createElement("i");

      iconDelete.classList.add("fa-trash");
      iconDelete.classList.add("fas");
      iconEdit.classList.add("fas");
      iconEdit.classList.add("fa-edit");
      button2.classList.add("btn");
      button2.classList.add("btn-primary");
      button2.classList.add("mr-3");
      // button.textContent = "DELETE";
      button.classList.add('btn');
      button.classList.add('btn-danger');

      var inputField = document.getElementById("name");
      var inputField2 = document.getElementById("course");
      var inputField3 = document.getElementById("grade");

      var addGradeHeader = document.getElementById("addGrade");
      var addButton = document.getElementById("add");

      // var updateName = document.createTextNode(data.name);
      // var updateCourse = document.createTextNode(data.course);
      // var updateGrade = document.createTextNode(data.grade);

      button.addEventListener("click", function () {
          deleteGrade(data.id);
        })
      button2.addEventListener("click", function() {
        inputField.placeholder = data.name
        inputField2.placeholder = data.course
        inputField3.placeholder = data.grade

        addGradeHeader.textContent = "Update Grade";
        addButton.textContent = "Update";

          editGrade(data.id);
      })
      tableData4.appendChild(button2);
      tableData4.appendChild(button);
      button.appendChild(iconDelete);
      button2.appendChild(iconEdit);

      tableRow.appendChild(tableData)
      tableRow.appendChild(tableData2)
      tableRow.appendChild(tableData3)
      tableRow.appendChild(tableData4);
      tableBody.appendChild(tableRow);
    }

  }
