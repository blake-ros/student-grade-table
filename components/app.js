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
    var averageGrade = gradeTotal / grades.length
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
  }
  createGrade(name, course, grade){
    console.log(name, course, grade);
    $.ajax({
      method: "POST",
      url: "http://sgt.lfzprototypes.com/api/grades",
      headers: { "X-access-token": "0qwwK16q" },
      data: {"name": name, "course": course, "grade": grade,},
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

}
