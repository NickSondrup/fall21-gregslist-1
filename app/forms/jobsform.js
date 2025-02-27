export function getJobFormTemplate() {
  return /*html*/`
  <form class="bg-white rounded p-3 shadow visually-hidden" onsubmit="app.jobsController.addJob()"
  id="job-form">
  <div class="form-group">
    <label for="company" class="">Company:</label>
    <input type = "text" class="form-control" name="company" id="company" required>
  </div>
  <div class="form-group">
    <label for="position" class="">Postion:</label>
    <input type="text" class="form-control" name="position" id="position" required min="0" max="9999999">
  </div>
  <div class="form-group">
    <label for="salary" class="">Salary:</label>
    <input type="number" class="form-control" name="salary" id="salary">
  </div>
  <div class="form-group">
    <label for="hours" class="">Hours: </label>
    <input type="number" class = "form-control" name="hours" id="hours" required>
  </div>
  <div class="form-group">
    <label for="description" class="">Description:</label>
    <textarea type="text" class="form-control" name="description" id="description" rows="5"></textarea>
  </div>
  <div class="form-group">
    <label for="img" class="">Img:</label>
    <input type="url" class="form-control" name="img" id="img" required>
  </div>
  <div class="button-group my-3">
    <button type="reset" class="btn btn-secondary">clear</button>
    <button type="submit" class="btn btn-primary">submit</button>
  </div>
</form>
  `
}