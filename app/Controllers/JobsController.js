import { ProxyState } from "../AppState.js";
import { jobsService } from "../Services/JobsService.js";
import { getJobFormTemplate} from "../forms/jobsform.js";


//Private
function _drawJobs() {
  let cardsTemplate = ''
  ProxyState.jobs.forEach(job => cardsTemplate += job.CardTemplate)
  document.getElementById("listings").innerHTML = cardsTemplate
}

//Public
export class JobsController {
  constructor() {
    ProxyState.on("jobs", _drawJobs);
    _drawJobs()
  }

  addJob() {
    event.preventDefault()

    /**
     * @type {HTMLFormElement}
     */
    //@ts-ignore
    const form = event.target
    
    const jobData = {
      company: form.company.value,
      position: form.position.value,
      salary: form.salary.value,
      hours: form.hours.value,
      img: form.img.value,
      description: form.description.value
    }
    try{
      jobsService.addJob(jobData)
    }catch (e) {
      console.error('this is an error i guess', e)
      return
    }
    form.reset()
  }

  showJobs(){
    document.getElementById('controls').innerHTML = `
    <button class="btn btn-info" onclick="app.jobsController.toggleJobsForm()">Add Job</button>
    `

    document.getElementById('forms').innerHTML = getJobFormTemplate()
  }

  toggleJobsForm() {
    document.getElementById('job-form').classList.toggle('visually-hidden')
  }


  }
