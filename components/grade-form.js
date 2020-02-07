class GradeForm {
  constructor(formElement){
    this.formElement = formElement;
    this.handleSumbit = this.handleSubmit.bind(this)
  }
  onSubmit(createGrade){
    this.createGrade = createGrade;
  }
  handleSubmit(event){
    event.preventDefault()
    console.log("handleSubmit: hi")
    var formData = new FormData(event.target)
    var formDataName = formData.get("name")
    var formDataCourse = formData.get("course")
    var formDataGrade = formData.get("grade")
  }
}
