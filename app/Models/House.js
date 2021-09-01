import { generateId } from "../Utils/generateId.js";

export class House {
  constructor(houseData){
    this.id = houseData.id 
    this.address = houseData.address 
    this.price = houseData.price
    this.color = houseData.color 
    this.squareFeet = houseData.squareFeet
    this.rooms = houseData.rooms
    this.bathrooms = houseData.bathrooms
    this.description = houseData.description
    this.img = houseData.img
  }

get CardTemplate(){
  return /*html*/ `
  <div class="col-lg-3 mb-4 listing">
  <div class="card">
    <img src="${this.img}" alt="" class="rounded">
    <div class="card-body">
      <h5 class="d-flex justify-content-between">
        <span> ${this.address} - ${this.squareFeet} - Color: ${this.color}</span>
        <span>${this.rooms} rooms - ${this.bathrooms} bathrooms </span>
        <span>${this.price}</span>
      </h5>
      <p></p>
    </div>
  </div>
</div>
  `
}




}