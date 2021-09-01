import { ProxyState } from "../AppState.js";
import { Job } from "../Models/Job.js";

  class JobsService {

    addJob(jobData){
      let newJob = new Job(jobData)
      ProxyState.jobs = [...ProxyState.jobs, newJob]
    }

}
 
export const jobsService = new JobsService();

