export function getHouseFormTemplate() {
  return /*html*/`
  <form class="bg-white rounded p-3 shadow visually-hidden" onsubmit="app.housesController.addHouse()"
  id="house-form">
  <div class="form-group">
    <label for="address" class="">Address:</label>
    <input type = "text" class="form-control" name="address" id="address" required>
  </div>
  <div class="form-group">
    <label for="price" class="">Price:</label>
    <input type="number" class="form-control" name="price" id="price" required min="0" max="9999999">
  </div>
  <div class="form-group">
    <label for="color" class="">Color:</label>
    <input type="text" class="form-control" name="color" id="color">
  </div>
  <div class="form-group">
    <label for="square-feet" class="">Square Feet: </label>
    <input type="number" class = "form-control" name="squarefeet" id="squarefeet" required>
  </div>
  <div class="form-group">
    <label for="rooms" class="">Rooms: </label>
    <input type="number" class = "form-control" name="rooms" id="rooms" required>
  </div>
  
  <div class="form-group">
    <label for="bathrooms" class="">Bathrooms:</label>
    <input type="number" class="form-control" name="bathrooms" id="bathrooms">
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