import { ProxyState } from "../AppState.js"
import { House } from "../Models/House.js"


class HousesService{

  addNewHouse(houseData){
    console.log('hello from houseservice')
    let newHouse = new House(houseData)
    ProxyState.houses = [...ProxyState.houses , newHouse ]
   }
  }


export const housesService = new HousesService()