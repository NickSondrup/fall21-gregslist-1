import { generateId } from "../Utils/generateId.js"

export class Job {
  constructor(jobData) {
    this.id = generateId()
    this.company = jobData.company
    this.position = jobData.position
    this.salary = jobData.salary
    this.hours = jobData.hours
    this.description = jobData.description
    this.img = jobData.img
  }

  get CardTemplate() {
    return /*html*/`
    <div class="col-lg-3 mb-4 listing">
      <div class="card">
        <img src="${this.img}" alt="listing image" class="rounded">
        <div class="card-body">
          <h5 class="d-flex justify-content-between">
          <span>${this.position}</span>
            <span style="Company: ${this.company}" >$${this.salary}a year. ${this.hours} hours a week</span>
          </h5>
          <p>${this.description}</p>
        </div>
      </div>
    </div>
    `
  }
    
}
