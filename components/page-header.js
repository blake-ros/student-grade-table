class PageHeader {
  constructor(headerElement){
    this.headerElement = headerElement
  }
  updateAverage(newAverage){
    document.querySelector("span").textContent = newAverage;
  }
}
