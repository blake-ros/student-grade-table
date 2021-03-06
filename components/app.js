class App {
  constructor(gradeTable, pageHeader, gradeForm){
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.gradeForm = gradeForm;
    this.createGrade = this.createGrade.bind(this);
    this.handleCreateGradeError = this.handleCreateGradeError.bind(this);
    this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this);
    this.deleteGrade = this.deleteGrade.bind(this);
    this.editGrade = this.editGrade.bind(this);
    this.handleEditGradeError = this.handleEditGradeError.bind(this);
    this.handleEditGradeSuccess = this.handleEditGradeSuccess.bind(this);
    this.handleDeleteGradeError = this.handleDeleteGradeError.bind(this);
    this.handleDeleteGradeSuccess = this.handleDeleteGradeSuccess.bind(this);
  }
  handleGetGradesError(error){
    console.error(error);
  }
  handleGetGradesSuccess(grades){
    this.gradeTable.updateGrades(grades);
    var gradeTotal = 0;
    for(var i = 0; i < grades.length; i++){
      gradeTotal += grades[i].grade
    }
    var averageGrade = Math.round(gradeTotal / grades.length)
    this.pageHeader.updateAverage(averageGrade);
  }
  getGrades(){
    $.ajax({
      method: "GET",
      url: "http://sgt.lfzprototypes.com/api/grades",
      headers: { "X-access-token": "0qwwK16q"},
      error: this.handleGetGradesError,
      success: this.handleGetGradesSuccess,
    })
  }
  start(){
    this.getGrades();
    this.gradeForm.onSubmit(this.createGrade);
    this.gradeTable.onDeleteClick(this.deleteGrade);
    this.gradeTable.onUpdateClick(this.editGrade);
  }
  createGrade(name, course, grade){
    $.ajax({
      method: "POST",
      url: "http://sgt.lfzprototypes.com/api/grades",
      headers: { "X-access-token": "0qwwK16q" },
      data: {"name": name, "course": course, "grade": grade},
      error: this.handleCreateGradeError,
      success: this.handleCreateGradeSuccess,
    })
  }
  handleCreateGradeError(error){
    console.error(error);
  }
  handleCreateGradeSuccess(){
    this.getGrades();
  }
  deleteGrade(id){
    $.ajax({
      method: "DELETE",
      url: "http://sgt.lfzprototypes.com/api/grades/"+ id,
      headers: { "X-access-token": "0qwwK16q" },
      error: this.handleDeleteGradeError,
      success: this.handleDeleteGradeSuccess,
    })
  }
  editGrade(id, name, course, grade){
    $.ajax({
      method: "PATCH",
      url: "http://sgt.lfzprototypes.com/api/grades/"+ id,
      headers: { "X-access-token": "0qwwK16q" },
      data: {"name": name, "course": course, "grade": grade},
      success: this.handleEditGradeSuccess,
      error: this.handleEditGradeError
    })
  }
  handleEditGradeError(error){
    console.error(error);
  }
  handleEditGradeSuccess(){
    this.getGrades();
  }
  handleDeleteGradeError(error){
    console.error(error);
  }
  handleDeleteGradeSuccess(){
    this.getGrades();
  }
}
