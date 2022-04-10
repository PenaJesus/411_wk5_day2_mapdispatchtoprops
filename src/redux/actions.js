//action is a function that returns an object
//this object should ALWAYS have a type property
//sometimes you also have a payload property

export const addCar = (newCar) => {
  return {
    type: "ADD_CAR",
    payload: newCar
  }
}

export const removeCar = (index) => {
  return {
    type: "REMOVE_CAR",
    payload: index
  }
}