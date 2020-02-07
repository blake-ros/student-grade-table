class GradeTable {
  constructor(tableElement){
  this.tableElement = tableElement;
  }
  updateGrades(grades){
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
  }
  onDeleteClick(deleteGrade){
    this.deleteGrade = deleteGrade;
  }
}
